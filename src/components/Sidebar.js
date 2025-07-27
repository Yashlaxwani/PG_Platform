import { useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import "../Styles/Sidebar.css";

const Sidebar = ({ currentPage, collapsed, setCollapsed }) => {
  const navigate = useNavigate();
  const { logout } = useAuth();

  const menuItems = [
    { id: "dashboard", label: "Dashboard", icon: "📊", path: "/dashboard" },
    {
      id: "add-activity",
      label: "Add Activity",
      icon: "➕",
      path: "/add-activity",
    },
    { id: "staff", label: "Staff", icon: "👥", path: "/staff" },
    { id: "tenants", label: "Tenants", icon: "🏠", path: "/tenants" },
    { id: "room", label: "Room", icon: "🚪", path: "/room" },
    { id: "complaints", label: "Complaints", icon: "📝", path: "/complaints" },
    { id: "add-menu", label: "Add menu", icon: "🍽️", path: "/add-menu" },
  ];

  const bottomMenuItems = [
    { id: "settings", label: "Settings", icon: "⚙️", path: "/settings" },
    { id: "logout", label: "Logout", icon: "🚪", action: "logout" },
  ];

  const handleNavigation = (item) => {
    if (item.action === "logout") {
      logout();
      navigate("/signin", { replace: true });
      return;
    }
    if (item.path) {
      navigate(item.path);
    }
  };

  return (
    <div className={`sidebar ${collapsed ? "collapsed" : ""}`}>
      <div className="sidebar-header">
        <div className="logo">
          <span className="logo-icon">📱</span>
          {!collapsed && <span className="logo-text">DashStack</span>}
        </div>
      </div>

      <nav className="sidebar-nav">
        <ul className="nav-list">
          {menuItems.map((item) => (
            <li key={item.id} className="nav-item">
              <button
                className={`nav-link ${
                  currentPage === item.id ? "active" : ""
                }`}
                onClick={() => handleNavigation(item)}
                title={collapsed ? item.label : ""}
              >
                <span className="nav-icon">{item.icon}</span>
                {!collapsed && <span className="nav-label">{item.label}</span>}
              </button>
            </li>
          ))}
        </ul>

        <ul className="nav-list nav-bottom">
          {bottomMenuItems.map((item) => (
            <li key={item.id} className="nav-item">
              <button
                className="nav-link"
                onClick={() => handleNavigation(item)}
                title={collapsed ? item.label : ""}
              >
                <span className="nav-icon">{item.icon}</span>
                {!collapsed && <span className="nav-label">{item.label}</span>}
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
