 

import { useState } from "react"
import DataTable from "../components/DataTable"
import Modal from "../components/Modal"
import "../Styles/StaffList.css"

const StaffList = () => {
  const [showModal, setShowModal] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    address: "",
    joiningDate: "",
    roomShareType: "",
    roomNo: "",
  })

  const staffData = [
    {
      roomNo: "00001",
      name: "Christine Brooks",
      address: "089 Kutch Green Apt. 448",
      joiningDate: "04 Sep 2019",
      roomShareType: "1",
      status: "Completed",
    },
    {
      roomNo: "00002",
      name: "Rosie Pearson",
      address: "979 Immanuel Ferry Suite 526",
      joiningDate: "28 May 2019",
      roomShareType: "2",
      status: "Processing",
    },
    {
      roomNo: "00003",
      name: "Darrell Caldwell",
      address: "8587 Frida Ports",
      joiningDate: "23 Nov 2019",
      roomShareType: "3",
      status: "Rejected",
    },
    {
      roomNo: "00004",
      name: "Gilbert Johnston",
      address: "768 Destiny Lake Suite 600",
      joiningDate: "05 Feb 2019",
      roomShareType: "4",
      status: "Completed",
    },
    {
      roomNo: "00005",
      name: "Alan Cain",
      address: "042 Mylene Throughway",
      joiningDate: "29 Jul 2019",
      roomShareType: "5",
      status: "Processing",
    },
  ]

  const columns = [
    { key: "roomNo", label: "RoomNO" },
    { key: "name", label: "NAME" },
    { key: "address", label: "ADDRESS" },
    { key: "joiningDate", label: "Joining DATE" },
    { key: "roomShareType", label: "Room share Type" },
    { key: "status", label: "STATUS" },
  ]

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("New staff data:", formData)
    setShowModal(false)
    setFormData({
      name: "",
      address: "",
      joiningDate: "",
      roomShareType: "",
      roomNo: "",
    })
  }

  return (
    <div className="staff-list">
      <h1 className="page-title">Staff List</h1>

      <DataTable data={staffData} columns={columns} onAddNew={() => setShowModal(true)} addNewLabel="Add New" />

      <Modal isOpen={showModal} onClose={() => setShowModal(false)} title="Add New Staff Member">
        <form onSubmit={handleSubmit} className="staff-form">
          <div className="form-group">
            <label>Room Number</label>
            <input type="text" name="roomNo" value={formData.roomNo} onChange={handleInputChange} required />
          </div>

          <div className="form-group">
            <label>Full Name</label>
            <input type="text" name="name" value={formData.name} onChange={handleInputChange} required />
          </div>

          <div className="form-group">
            <label>Address</label>
            <textarea name="address" value={formData.address} onChange={handleInputChange} required />
          </div>

          <div className="form-group">
            <label>Joining Date</label>
            <input type="date" name="joiningDate" value={formData.joiningDate} onChange={handleInputChange} required />
          </div>

          <div className="form-group">
            <label>Room Share Type</label>
            <select name="roomShareType" value={formData.roomShareType} onChange={handleInputChange} required>
              <option value="">Select Type</option>
              <option value="Electric">Electric</option>
              <option value="Book">Book</option>
              <option value="Medicine">Medicine</option>
              <option value="Mobile">Mobile</option>
              <option value="Watch">Watch</option>
            </select>
          </div>

          <div className="form-actions">
            <button type="button" onClick={() => setShowModal(false)} className="cancel-btn">
              Cancel
            </button>
            <button type="submit" className="submit-btn">
              Add Staff
            </button>
          </div>
        </form>
      </Modal>
    </div>
  )
}

export default StaffList
