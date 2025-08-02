import { useState, useEffect } from "react";
import DataTable from "../components/DataTable";
import Modal from "../components/Modal";
import "../Styles/TenantsList.css";
import axiosInstance from "../api/axiosInstance";

const TenantsList = () => {
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    password: "",
    joinDate: null,
    roomNumber: null,
  });
  const [tenantsData, setTenantsData] = useState([]);

  useEffect(() => {
    const fetchTenants = async () => {
      try {
        const getQuery = `
        query {
              getTenants {
                roomNumber
                name
                email
                joinDate
              }
            }
        `;
        const res = await axiosInstance.post("", {
          query: getQuery,
        });

        const tenants = res.data.data.getTenants;
        setTenantsData(tenants);
      } catch (error) {
        console.error("Error fetching tenants:", error);
      }
    };

    fetchTenants();
  }, []);

  const columns = [
    { key: "roomNumber", label: "Room" },
    { key: "name", label: "Name" },
    { key: "email", label: "Email" },
    { key: "joinDate", label: "Joining Date" },
  ];

  const handleInputChange = (e) => {

    if( e.target.name === 'roomNumber'){
      const numValue = parseInt(e.target.value) || 0;
      setFormData({
        ...formData,
        [e.target.name]: numValue
      })
    }else{
      setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    };

    
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);
    setShowModal(false);

    const AddTanent = `
    mutation AddTenant($data: TenantInput!) {
      addTenant(data: $data) {
        id
        name
        email
        roomNumber
      }
  }
    `;

    await axiosInstance
      .post("", {
        query: AddTanent,
        variables: {
          data: formData,
        },
      })
      .then((response) => {
        console.log("Tenant added successfully:", response.data);
      })
      .catch((error) => {
        console.error("Error adding tenant:", error);
      });

    setFormData({
      name: "",
      email: "",
      phoneNumber: "",
      password: "",
      joinDate: null,
      roomNumber: null,
    });
  };

  return (
    <div className="tenants-list">
      <h1 className="page-title">Tenants List</h1>

      <DataTable
        data={tenantsData}
        columns={columns}
        onAddNew={() => setShowModal(true)}
        addNewLabel="Add New"
      />

      <Modal
        isOpen={showModal}
        onClose={() => setShowModal(false)}
        title="Add New Tenant"
      >
        <form onSubmit={handleSubmit} className="tenant-form">
          <div className="form-group">
            <label>Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Room Number</label>
            <input
              type="text"
              name="roomNumber"
              value={formData.roomNumber}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Phone Number</label>
            <input
              type="text"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Joining Date</label>
            <input
              type="date"
              name="joiningDate"
              value={formData.joiningDate}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-actions">
            <button
              type="button"
              onClick={() => setShowModal(false)}
              className="cancel-btn"
            >
              Cancel
            </button>
            <button type="submit" className="submit-btn">
              Add Tenant
            </button>
          </div>
        </form>
      </Modal>
    </div>
  );
};

export default TenantsList;
