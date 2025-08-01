import { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext();

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const checkAuthStatus = async () => {
      try {
        const response = await fetch("/api/auth/verify", {
          method: "GET",
          credentials: "include",
          headers: {
            "Content-Type": "application/json",
          },
        });

        if (response.ok) {
          const data = await response.json();
          if (data.isAuthenticated) {
            setUser(data.user);
            setIsAuthenticated(true);
          } else {
            setUser(null);
            setIsAuthenticated(false);
          }
        } else {
          setUser(null);
          setIsAuthenticated(false);
        }
      } catch (error) {
        console.error("Authentication check failed:", error);
        setUser(null);
        setIsAuthenticated(false);
      } finally {
        setIsLoading(false);
      }
    };

    checkAuthStatus();
  }, []);

  const login = async (credentials) => {
    try {
      const response = await fetch("/api/auth/login", {
        method: "POST",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(credentials),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setUser(data.user);
        setIsAuthenticated(true);

        document.cookie = `authToken=${data.authToken}; path=/; max-age=${
          60 * 60 * 24 * 7
        }`;
        document.cookie = `pg_id=${data.pg_id}; path=/; max-age=${
          60 * 60 * 24 * 7
        }`;

        return { success: true, message: "Login successful" };
      } else {
        return {
          success: false,
          message: data.message || "Login failed",
        };
      }
    } catch (error) {
      console.error("Login failed:", error);
      return {
        success: false,
        message: "Network error. Please try again.",
      };
    }
  };

  const logout = async () => {
    try {
      await fetch("/api/auth/logout", {
        method: "POST",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
      });
    } catch (error) {
      console.error("Logout error:", error);
    } finally {
      setUser(null);
      setIsAuthenticated(false);

      document.cookie = "authToken=; path=/; max-age=0";
      document.cookie = "pg_id=; path=/; max-age=0";
    }
  };

  return (
    <AuthContext.Provider
      value={{ isAuthenticated, user, isLoading, login, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
};
