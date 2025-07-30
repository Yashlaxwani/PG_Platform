

import { useState } from "react"
import ReactApexChart from "react-apexcharts"
import "../Styles/Dashboard.css"

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState("breakfast")

  const tabs = [
    { id: "breakfast", label: "Breakfast", color: "#3b82f6" },
    { id: "lunch", label: "Lunch", color: "#f59e0b" },
    { id: "hightea", label: "Hightea", color: "#10b981" },
    { id: "dinner", label: "Dinner", color: "#ef4444" },
  ]

  // Mock data for different meal times
  const getMealData = (mealType) => {
    const baseData = {
      breakfast: {
        weeklyAvgBooked: 1250,
        weeklyAvgServed: 1180,
        totalBooked: 8750,
        totalServed: 8260,
        bookedPercentage: [75, 25], // Booked vs Not Booked
        servedPercentage: [85, 15], // Served vs Not Served
      },
      lunch: {
        weeklyAvgBooked: 1850,
        weeklyAvgServed: 1720,
        totalBooked: 12950,
        totalServed: 12040,
        bookedPercentage: [82, 18],
        servedPercentage: [88, 12],
      },
      hightea: {
        weeklyAvgBooked: 650,
        weeklyAvgServed: 580,
        totalBooked: 4550,
        totalServed: 4060,
        bookedPercentage: [65, 35],
        servedPercentage: [78, 22],
      },
      dinner: {
        weeklyAvgBooked: 1950,
        weeklyAvgServed: 1820,
        totalBooked: 13650,
        totalServed: 12740,
        bookedPercentage: [88, 12],
        servedPercentage: [92, 8],
      },
    }
    return baseData[mealType]
  }

  const currentData = getMealData(activeTab)

  // Stats cards data
  const statsData = [
    {
      title: "Weekly Avg Booked",
      value: currentData.weeklyAvgBooked.toLocaleString(),
      change: "8.5% Up from last week",
      changeType: "up",
      color: "blue",
    },
    {
      title: "Weekly Avg Served",
      value: currentData.weeklyAvgServed.toLocaleString(),
      change: "6.2% Up from last week",
      changeType: "up",
      color: "orange",
    },
    {
      title: "Total Booked",
      value: currentData.totalBooked.toLocaleString(),
      change: "12.3% Up from last month",
      changeType: "up",
      color: "green",
    },
    {
      title: "Total Served",
      value: currentData.totalServed.toLocaleString(),
      change: "10.8% Up from last month",
      changeType: "up",
      color: "red",
    },
  ]

  // Pie Chart 1: Today's Booking Percentage
  const bookingPieChart = {
    series: currentData.bookedPercentage,
    options: {
      chart: {
        width: 380,
        type: "pie",
      },
      labels: ["Booked", "Not Booked"],
      colors: ["#10b981", "#ef4444"],
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 300,
            },
            legend: {
              position: "bottom",
            },
          },
        },
      ],
      legend: {
        position: "bottom",
      },
      title: {
        text: "Today's Booking Status",
        align: "center",
        style: {
          fontSize: "16px",
          fontWeight: "600",
        },
      },
    },
  }

  // Pie Chart 2: Today's Serving Percentage
  const servingPieChart = {
    series: currentData.servedPercentage,
    options: {
      chart: {
        width: 380,
        type: "pie",
      },
      labels: ["Served", "Not Served"],
      colors: ["#3b82f6", "#f59e0b"],
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 300,
            },
            legend: {
              position: "bottom",
            },
          },
        },
      ],
      legend: {
        position: "bottom",
      },
      title: {
        text: "Today's Serving Status",
        align: "center",
        style: {
          fontSize: "16px",
          fontWeight: "600",
        },
      },
    },
  }

  // Bar Chart 1: 5 Floor Data
  const floorChart5 = {
    series: [
      {
        name: "Served",
        data: [120, 95, 88, 110, 75],
      },
      {
        name: "Pending",
        data: [25, 15, 22, 18, 12],
      },
    ],
    options: {
      chart: {
        type: "bar",
        height: 350,
      },
      plotOptions: {
        bar: {
          horizontal: true,
          dataLabels: {
            position: "top",
          },
        },
      },
      dataLabels: {
        enabled: true,
        offsetX: -6,
        style: {
          fontSize: "12px",
          colors: ["#fff"],
        },
      },
      stroke: {
        show: true,
        width: 1,
        colors: ["#fff"],
      },
      tooltip: {
        shared: true,
        intersect: false,
      },
      xaxis: {
        categories: ["Floor 1", "Floor 2", "Floor 3", "Floor 4", "Floor 5"],
      },
      colors: ["#10b981", "#ef4444"],
      title: {
        text: "5 Floor Data - Served vs Pending",
        align: "center",
        style: {
          fontSize: "16px",
          fontWeight: "600",
        },
      },
    },
  }

  // Bar Chart 2: 6 Floor Data
  const floorChart6 = {
    series: [
      {
        name: "Served",
        data: [135, 108, 92, 125, 88, 95],
      },
      {
        name: "Pending",
        data: [28, 18, 25, 22, 15, 20],
      },
    ],
    options: {
      chart: {
        type: "bar",
        height: 350,
      },
      plotOptions: {
        bar: {
          horizontal: true,
          dataLabels: {
            position: "top",
          },
        },
      },
      dataLabels: {
        enabled: true,
        offsetX: -6,
        style: {
          fontSize: "12px",
          colors: ["#fff"],
        },
      },
      stroke: {
        show: true,
        width: 1,
        colors: ["#fff"],
      },
      tooltip: {
        shared: true,
        intersect: false,
      },
      xaxis: {
        categories: ["Floor 1", "Floor 2", "Floor 3", "Floor 4", "Floor 5", "Floor 6"],
      },
      colors: ["#3b82f6", "#f59e0b"],
      title: {
        text: "6 Floor Data - Served vs Pending",
        align: "center",
        style: {
          fontSize: "16px",
          fontWeight: "600",
        },
      },
    },
  }

  const getStatCardClass = (color) => {
    const colorClasses = {
      blue: "stat-card-blue",
      orange: "stat-card-orange",
      green: "stat-card-green",
      red: "stat-card-red",
    }
    return colorClasses[color] || "stat-card-blue"
  }

  return (
    <div className="dashboard">
      <h1 className="page-title">Food Service Dashboard</h1>

      {/* Tabs */}
      <div className="dashboard-tabs">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            className={`tab-button ${activeTab === tab.id ? "active" : ""}`}
            onClick={() => setActiveTab(tab.id)}
            style={{
              borderBottomColor: activeTab === tab.id ? tab.color : "transparent",
            }}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Stats Cards */}
      <div className="stats-grid">
        {statsData.map((stat, index) => (
          <div key={index} className={`stats-card ${getStatCardClass(stat.color)}`}>
            <div className="stats-content">
              <div className="stats-text">
                <h3 className="stats-title">{stat.title}</h3>
                <p className="stats-value">{stat.value}</p>
                <div className={`stats-change ${stat.changeType}`}>
                  <span className="change-icon">{stat.changeType === "up" ? "📈" : "📉"}</span>
                  <span>{stat.change}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Pie Charts */}
      <div className="charts-row">
        <div className="chart-card">
          <ReactApexChart options={bookingPieChart.options} series={bookingPieChart.series} type="pie" width={380} />
        </div>
        <div className="chart-card">
          <ReactApexChart options={servingPieChart.options} series={servingPieChart.series} type="pie" width={380} />
        </div>
      </div>

      {/* Bar Charts */}
      <div className="charts-row">
        <div className="chart-card">
          <ReactApexChart options={floorChart5.options} series={floorChart5.series} type="bar" height={350} />
        </div>
        <div className="chart-card">
          <ReactApexChart options={floorChart6.options} series={floorChart6.series} type="bar" height={350} />
        </div>
      </div>
    </div>
  )
}

export default Dashboard
