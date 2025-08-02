import { useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import "./App.css";

function App() {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const location = useLocation();

  const getCurrentPage = () => {
    const pathname = location.pathname;
    if (pathname === "/" || pathname === "/dashboard") return "dashboard";
    if (pathname === "/staff") return "staff";
    if (pathname === "/tenants") return "tenants";
    if (pathname === "/add-activity") return "add-activity";
    if (pathname === "/room") return "room";
    if (pathname === "/complaints") return "complaints";
    if (pathname === "/add-menu") return "add-menu";
    if (pathname === "/settings") return "settings";
    return "dashboard";
  };

  return (
    <div className="app">
      <Sidebar
        currentPage={getCurrentPage()}
        collapsed={sidebarCollapsed}
        setCollapsed={setSidebarCollapsed}
      />
      <div
        className={`main-content ${
          sidebarCollapsed ? "sidebar-collapsed" : ""
        }`}
      >
        <Header
          sidebarCollapsed={sidebarCollapsed}
          setSidebarCollapsed={setSidebarCollapsed}
        />
        <div className="page-content">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default App;
