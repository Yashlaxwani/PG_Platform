import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://api.example.com",
  timeout: 10000,
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
  },
});

axiosInstance.interceptors.request.use(
  (config) => {
    const cookies = document.cookie.split("; ");
    const cookieMap = {};
    cookies.forEach((cookie) => {
      const [key, value] = cookie.split("=");
      cookieMap[key] = value;
    });

    if (cookieMap.authToken) {
      config.headers["Authorization"] = `Bearer ${cookieMap.authToken}`;
    }

    if (cookieMap.pg_id) {
      config.headers["x-pg-id"] = cookieMap.pg_id;
    }

    return config;
  },
  (error) => Promise.reject(error)
);

axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      window.location.href = "/login";
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;
