import { useState } from "react";
import QRScanner from "../components/QRScanner";
import "../Styles/AddActivity.css";

const AddActivity = () => {
  const [showQRScanner, setShowQRScanner] = useState(false);
  const [scannerType, setScannerType] = useState("");
  const [scannedData, setScannedData] = useState([]);

  const handleCardClick = (type) => {
    setScannerType(type);
    setShowQRScanner(true);
  };

  const handleQRScan = (data) => {
    setScannedData((prev) => [
      ...prev,
      {
        type: scannerType,
        data: data,
        timestamp: new Date().toLocaleString(),
      },
    ]);
  };

  return (
    <div className="add-activity">
      <h1 className="page-title">Add Activity</h1>

      <div className="activity-cards">
        <div
          className="activity-card mess-card"
          onClick={() => handleCardClick("Mess")}
        >
          <div className="card-icon">🍽️</div>
          <h3>Mess</h3>
          <p>Scan QR code for mess activities</p>
          <div className="card-overlay">
            <span>Click to Scan</span>
          </div>
        </div>

        <div
          className="activity-card laundry-card"
          onClick={() => handleCardClick("Laundry")}
        >
          <div className="card-icon">👕</div>
          <h3>Laundry</h3>
          <p>Scan QR code for laundry services</p>
          <div className="card-overlay">
            <span>Click to Scan</span>
          </div>
        </div>
      </div>

      {scannedData.length > 0 && (
        <div className="scanned-data">
          <h3>Recent Scans</h3>
          <div className="scanned-list">
            {scannedData.map((item, index) => (
              <div key={index} className="scanned-item">
                <div className="scan-type">{item.type}</div>
                <div className="scan-data">{item.data}</div>
                <div className="scan-time">{item.timestamp}</div>
              </div>
            ))}
          </div>
        </div>
      )}

      <QRScanner
        isOpen={showQRScanner}
        onClose={() => setShowQRScanner(false)}
        onScan={handleQRScan}
        type={scannerType}
      />
    </div>
  );
};

export default AddActivity;
