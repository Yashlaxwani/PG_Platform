 
import "../Styles/Sidebar.css"

const Sidebar = ({ currentPage, setCurrentPage, collapsed, setCollapsed }) => {
  const menuItems = [
    { id: "dashboard", label: "Dashboard", icon: "📊" },
    { id: "add-activity", label: "Add Activity", icon: "➕" },
    { id: "staff", label: "Staff", icon: "👥" },
    { id: "tenants", label: "Tenants", icon: "🏠" },
    { id: "room", label: "Room", icon: "🚪" },
    { id: "complaints", label: "Complaints", icon: "📝" },
    { id: "add-menu", label: "Add menu", icon: "🍽️" },
  ]

  const bottomMenuItems = [
    { id: "settings", label: "Settings", icon: "⚙️" },
    { id: "logout", label: "Logout", icon: "🚪" },
  ]

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
                className={`nav-link ${currentPage === item.id ? "active" : ""}`}
                onClick={() => setCurrentPage(item.id)}
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
              <button className="nav-link" onClick={() => setCurrentPage(item.id)} title={collapsed ? item.label : ""}>
                <span className="nav-icon">{item.icon}</span>
                {!collapsed && <span className="nav-label">{item.label}</span>}
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  )
}

export default Sidebar
