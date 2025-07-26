import "../Styles/StatsCard.css"

const StatsCard = ({ title, value, change, changeType, icon, color }) => {
  return (
    <div className={`stats-card ${color}`}>
      <div className="stats-content">
        <div className="stats-text">
          <h3 className="stats-title">{title}</h3>
          <p className="stats-value">{value}</p>
          <div className={`stats-change ${changeType}`}>
            <span className="change-icon">{changeType === "up" ? "📈" : changeType === "down" ? "📉" : "📊"}</span>
            <span>{change}</span>
          </div>
        </div>
        <div className="stats-icon">{icon}</div>
      </div>
    </div>
  )
}

export default StatsCard
