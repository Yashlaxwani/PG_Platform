 

import { useState } from "react"
import Sidebar from "./components/Sidebar"
import Header from "./components/Header"
import Dashboard from "./pages/Dashboard"
import StaffList from "./pages/StaffList"
import TenantsList from "./pages/TenantsList"
import AddActivity from "./pages/AddActivity"
import "./App.css"

function App() {
  const [currentPage, setCurrentPage] = useState("dashboard")
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false)

  const renderPage = () => {
    switch (currentPage) {
      case "dashboard":
        return <Dashboard />
      case "staff":
        return <StaffList />
      case "tenants":
        return <TenantsList />
      case "add-activity":
        return <AddActivity />
      default:
        return <Dashboard />
    }
  }

  return (
    <div className="app">
      <Sidebar
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        collapsed={sidebarCollapsed}
        setCollapsed={setSidebarCollapsed}
      />
      <div className={`main-content ${sidebarCollapsed ? "sidebar-collapsed" : ""}`}>
        <Header sidebarCollapsed={sidebarCollapsed} setSidebarCollapsed={setSidebarCollapsed} />
        <div className="page-content">{renderPage()}</div>
      </div>
    </div>
  )
}

export default App
