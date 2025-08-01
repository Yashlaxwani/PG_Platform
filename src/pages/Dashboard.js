"use client"

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
        wastePercentage: [12, 88], // Waste vs No Waste
      },
      lunch: {
        weeklyAvgBooked: 1850,
        weeklyAvgServed: 1720,
        totalBooked: 12950,
        totalServed: 12040,
        bookedPercentage: [82, 18],
        servedPercentage: [88, 12],
        wastePercentage: [8, 92],
      },
      hightea: {
        weeklyAvgBooked: 650,
        weeklyAvgServed: 580,
        totalBooked: 4550,
        totalServed: 4060,
        bookedPercentage: [65, 35],
        servedPercentage: [78, 22],
        wastePercentage: [15, 85],
      },
      dinner: {
        weeklyAvgBooked: 1950,
        weeklyAvgServed: 1820,
        totalBooked: 13650,
        totalServed: 12740,
        bookedPercentage: [88, 12],
        servedPercentage: [92, 8],
        wastePercentage: [6, 94],
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
     
      
    },
    {
      title: "Weekly Avg Served",
      value: currentData.weeklyAvgServed.toLocaleString(),
      
      
     
    },
    {
      title: "Total Booked",
      value: currentData.totalBooked.toLocaleString(),
     
     
     
    },
    {
      title: "Total Served",
      value: currentData.totalServed.toLocaleString(),
    
      color: "red",
    },
  ]

  // Pie Chart 1: Today's Booking Percentage
  const bookingPieChart = {
    series: currentData.bookedPercentage,
    options: {
      chart: {
        width: 350,
        type: "pie",
      },
      labels: ["Booked", "Not Booked"],
      colors: ["#10b981", "#ef4444"],
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 280,
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
        width: 350,
        type: "pie",
      },
      labels: ["Served", "Not Served"],
      colors: ["#3b82f6", "#f59e0b"],
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 280,
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

  // Pie Chart 3: Food Waste Percentage
  const wastePieChart = {
    series: currentData.wastePercentage,
    options: {
      chart: {
        width: 350,
        type: "pie",
      },
      labels: ["Waste", "No Waste"],
      colors: ["#ef4444", "#10b981"],
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 280,
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
        text: "Food Waste Analysis",
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
        height: 400,
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
        height: 400,
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
      colors: ["#3b82f6", "#3b83f66a"],
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

      {/* Dashboard Grid Layout */}
      <div className="dashboard-grid">
        {/* Row 1: Stats Cards (4 boxes) */}
        <div className="stats-row">
          {statsData.map((stat, index) => (
            
              <div className="stats-content">
                <div className="stats-text">
                  <h3 className="stats-title">{stat.title}</h3>
                  <p className="stats-value">{stat.value}</p>
                 
                </div>
              
            </div>
          ))}
        </div>

        {/* Row 2: Pie Charts (3 charts) */}
        <div className="pie-charts-row">
          <div className="chart-card">
            <ReactApexChart options={bookingPieChart.options} series={bookingPieChart.series} type="pie" width={350} />
          </div>
          <div className="chart-card">
            <ReactApexChart options={servingPieChart.options} series={servingPieChart.series} type="pie" width={350} />
          </div>
          <div className="chart-card">
            <ReactApexChart options={wastePieChart.options} series={wastePieChart.series} type="pie" width={350} />
          </div>
        </div>

        {/* Row 3: Bar Charts (2 charts) */}
        <div className="bar-charts-row">
          <div className="chart-card">
            <ReactApexChart options={floorChart5.options} series={floorChart5.series} type="bar" height={400} />
          </div>
          <div className="chart-card">
            <ReactApexChart options={floorChart6.options} series={floorChart6.series} type="bar" height={400} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard
