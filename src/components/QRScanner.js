 

import { useState, useRef, useEffect } from "react"
import "../Styles/QRScanner.css"

const QRScanner = ({ isOpen, onClose, onScan, type }) => {
  const [scanning, setScanning] = useState(false)
  const videoRef = useRef(null)

  useEffect(() => {
    if (isOpen && videoRef.current) {
      startCamera()
    }
    return () => {
      stopCamera()
    }
  }, [isOpen])

  const startCamera = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        video: { facingMode: "environment" },
      })
      if (videoRef.current) {
        videoRef.current.srcObject = stream
        setScanning(true)
      }
    } catch (error) {
      console.error("Error accessing camera:", error)
      alert("Camera access denied or not available")
    }
  }

  const stopCamera = () => {
    if (videoRef.current && videoRef.current.srcObject) {
      const tracks = videoRef.current.srcObject.getTracks()
      tracks.forEach((track) => track.stop())
      setScanning(false)
    }
  }

  const handleScan = () => {
    // Simulate QR code scan
    const mockQRData = `${type}-${Date.now()}`
    onScan(mockQRData)
    stopCamera()
    onClose()
  }

  if (!isOpen) return null

  return (
    <div className="qr-scanner-overlay">
      <div className="qr-scanner-modal">
        <div className="qr-scanner-header">
          <h3>Scan QR Code - {type}</h3>
          <button
            className="close-btn"
            onClick={() => {
              stopCamera()
              onClose()
            }}
          >
            ×
          </button>
        </div>

        <div className="qr-scanner-content">
          <div className="camera-container">
            <video ref={videoRef} autoPlay playsInline className="camera-video" />
            <div className="scan-overlay">
              <div className="scan-frame"></div>
            </div>
          </div>

          <div className="scanner-controls">
            <button className="scan-btn" onClick={handleScan} disabled={!scanning}>
              📷 Scan QR Code
            </button>
            <p className="scan-instruction">Position the QR code within the frame to scan</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default QRScanner
