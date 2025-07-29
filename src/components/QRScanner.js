// QRScanner.js
import { useEffect } from "react"
import { Html5QrcodeScanner } from "html5-qrcode"
import "../Styles/QRScanner.css"

const QRScanner = ({ isOpen, onClose, onScan, type }) => {
  useEffect(() => {
    if (!isOpen) return

    const scanner = new Html5QrcodeScanner(
      "qr-reader",
      {
        fps: 10,
        qrbox: 250,
        aspectRatio: 1.0,
      },
      false
    )

    scanner.render(
      (decodedText) => {
        onScan(`${type}-${decodedText}`) // You can format however you like
        scanner.clear().then(() => {
          onClose()
        })
      },
      (errorMessage) => {
        // You can log or ignore scan failures
        console.log("QR scan error:", errorMessage)
      }
    )

    return () => {
      scanner.clear().catch((e) => console.error("Failed to clear scanner:", e))
    }
  }, [isOpen])

  if (!isOpen) return null

  return (
    <div className="qr-scanner-overlay">
      <div className="qr-scanner-modal">
        <div className="qr-scanner-header">
          <h3>Scan QR Code - {type}</h3>
          <button className="close-btn" onClick={onClose}>
            ×
          </button>
        </div>
        <div id="qr-reader" style={{ width: "100%" }}></div>
      </div>
    </div>
  )
}

export default QRScanner
