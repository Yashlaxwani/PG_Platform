import { useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import "../Styles/Sidebar.css";
import GridViewIcon from "@mui/icons-material/GridView";
import AddIcon from "@mui/icons-material/Add";
import PeopleOutlineIcon from "@mui/icons-material/PeopleOutline";
import AddHomeWorkOutlinedIcon from '@mui/icons-material/AddHomeWorkOutlined';
import SensorDoorOutlinedIcon from '@mui/icons-material/SensorDoorOutlined';
import DescriptionOutlinedIcon from '@mui/icons-material/DescriptionOutlined';
import RestaurantOutlinedIcon from '@mui/icons-material/RestaurantOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';

const Sidebar = ({ currentPage, collapsed, setCollapsed }) => {
  const navigate = useNavigate();
  const { logout } = useAuth();

  const menuItems = [
    {
      id: "dashboard",
      label: "Dashboard",
      icon: <GridViewIcon />,
      path: "/dashboard",
    },
    {
      id: "add-activity",
      label: "Add Activity",
      icon: <AddIcon />,
      path: "/add-activity",
    },
    {
      id: "staff",
      label: "Staff",
      icon: <PeopleOutlineIcon />,
      path: "/staff",
    },
    { id: "tenants", label: "Tenants", icon: <AddHomeWorkOutlinedIcon />, path: "/tenants" },
    { id: "room", label: "Room", icon: <SensorDoorOutlinedIcon />, path: "/room" },
    { id: "complaints", label: "Complaints", icon: <DescriptionOutlinedIcon />, path: "/complaints" },
    { id: "add-menu", label: "Add menu", icon: <RestaurantOutlinedIcon />, path: "/add-menu" },
  ];

  const bottomMenuItems = [
    { id: "settings", label: "Settings", icon: <SettingsOutlinedIcon />, path: "/settings" },
    { id: "logout", label: "Logout", icon: <LogoutOutlinedIcon />, action: "logout" },
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
          <img
            src={require("../assets/images/Wander-Vibes-logo.webp")}
            alt="Logo"
            className="logo-icon-img"
          />
          {!collapsed && <span className="logo-text">Smart Living PG</span>}
        </div>

      </div>

      <nav className="sidebar-nav">
        <ul className="nav-list">
          {menuItems.map((item) => (
            <li key={item.id} className="nav-item">
              <button
                className={`nav-link ${currentPage === item.id ? "active" : ""
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
