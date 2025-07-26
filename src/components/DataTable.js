 

import { useState } from "react"
import "../Styles/DataTable.css"

const DataTable = ({ data, columns, onAddNew, addNewLabel = "Add New" }) => {
  const [currentPage, setCurrentPage] = useState(1)
  const [itemsPerPage] = useState(10)
  const [filters, setFilters] = useState({})

  const indexOfLastItem = currentPage * itemsPerPage
  const indexOfFirstItem = indexOfLastItem - itemsPerPage
  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem)
  const totalPages = Math.ceil(data.length / itemsPerPage)

  const getStatusClass = (status) => {
    switch (status?.toLowerCase()) {
      case "completed":
        return "status-completed"
      case "processing":
        return "status-processing"
      case "rejected":
        return "status-rejected"
      case "in transit":
        return "status-transit"
      case "on hold":
        return "status-hold"
      default:
        return "status-default"
    }
  }

  return (
    <div className="data-table-container">
      <div className="table-header">
        <div className="table-filters">
          <button className="filter-btn">
            <span>🔽</span> Filter By
          </button>
          <select className="filter-select">
            <option>RoomNO</option>
          </select>
          <select className="filter-select">
            <option>Joining DATE</option>
          </select>
          <select className="filter-select">
            <option>Room share Type</option>
          </select>
          <button className="reset-filter">🔄 Reset Filter</button>
        </div>

        <button className="add-new-btn" onClick={onAddNew}>
          {addNewLabel}
        </button>
      </div>

      <div className="table-wrapper">
        <table className="data-table">
          <thead>
            <tr>
              {columns.map((column) => (
                <th key={column.key}>{column.label}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {currentItems.map((item, index) => (
              <tr key={index}>
                {columns.map((column) => (
                  <td key={column.key}>
                    {column.key === "status" ? (
                      <span className={`status-badge ${getStatusClass(item[column.key])}`}>{item[column.key]}</span>
                    ) : (
                      item[column.key]
                    )}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="pagination">
        <span className="pagination-info">
          Showing {indexOfFirstItem + 1}-{Math.min(indexOfLastItem, data.length)} of {data.length}
        </span>
        <div className="pagination-controls">
          <button
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
            className="pagination-btn"
          >
            ‹
          </button>
          <button
            onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
            disabled={currentPage === totalPages}
            className="pagination-btn"
          >
            ›
          </button>
        </div>
      </div>
    </div>
  )
}

export default DataTable
