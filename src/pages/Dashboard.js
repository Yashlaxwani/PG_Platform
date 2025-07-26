import StatsCard from "../components/StatsCard"
import "../Styles/Dashboard.css"

const Dashboard = () => {
  const statsData = [
    {
      title: "Total User",
      value: "40,689",
      change: "8.5% Up from yesterday",
      changeType: "up",
      icon: "👥",
      color: "blue",
    },
    {
      title: "Total Order",
      value: "10293",
      change: "1.3% Up from past week",
      changeType: "up",
      icon: "📦",
      color: "yellow",
    },
    {
      title: "Total Sales",
      value: "$89,000",
      change: "4.3% Down from yesterday",
      changeType: "down",
      icon: "💰",
      color: "green",
    },
    {
      title: "Total Pending",
      value: "2040",
      change: "1.8% Up from yesterday",
      changeType: "up",
      icon: "⏳",
      color: "orange",
    },
  ]

  return (
    <div className="dashboard">
      <h1 className="page-title">Dashboard</h1>

      <div className="stats-grid">
        {statsData.map((stat, index) => (
          <StatsCard key={index} {...stat} />
        ))}
      </div>

      <div className="charts-grid">
        <div className="chart-card">
          <h3>Rooms</h3>
          <div className="chart-container">
            <div className="donut-chart">
              <div className="chart-center">
                <div className="chart-value">34,249</div>
                <div className="chart-label">New Customers</div>
              </div>
            </div>
            <div className="chart-legend">
              <div className="legend-item">
                <span className="legend-color blue"></span>
                <span>New Customers</span>
              </div>
              <div className="legend-item">
                <span className="legend-color purple"></span>
                <span>Repeated</span>
              </div>
            </div>
          </div>
        </div>

        <div className="chart-card">
          <h3>Sales Analytics</h3>
          <div className="line-chart">
            <svg viewBox="0 0 400 200" className="chart-svg">
              <path d="M 20 150 Q 100 120 150 100 T 250 80 T 350 60" stroke="#4F46E5" strokeWidth="3" fill="none" />
              <path d="M 20 180 Q 100 160 150 140 T 250 120 T 350 100" stroke="#06B6D4" strokeWidth="3" fill="none" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard
