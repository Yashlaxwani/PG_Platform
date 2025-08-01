import { useAuth } from "../contexts/AuthContext";
import "../Styles/Header.css";

const Header = ({ sidebarCollapsed, setSidebarCollapsed }) => {
  const { user } = useAuth();

  return (
    <header className="header">
      <div className="header-left">
        <button
          className="hamburger-btn"
          onClick={() => setSidebarCollapsed(!sidebarCollapsed)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

      
      </div>

      <div className="header-right">
        <div className="notification-icon">
          <span>🔔</span>
          <span className="notification-badge">4</span>
        </div>

        <div className="language-selector">
          <img src="/placeholder.svg?height=20&width=30" alt="English" />
          <span>English</span>
        </div>

        <div className="user-profile">
          <img src="/placeholder.svg?height=32&width=32" alt="User" />
          <div className="user-info">
            <span className="user-name">{user?.name || "User"}</span>
            <span className="user-role">{user?.role || "Admin"}</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
