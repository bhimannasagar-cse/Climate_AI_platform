import { useState } from 'react';

export default function SOSButton() {
  const [status, setStatus] = useState('');

  const handleSOS = () => {
    // Demo mode: Show mock coordinates for hackathon presentation
    const mockLatitude = 12.9716;  // Bangalore coordinates
    const mockLongitude = 77.5946;
    
    setStatus(`🚨 SOS Alert Sent! Location: ${mockLatitude}, ${mockLongitude}`);
    
    // Show alert popup
    alert(`🚨 EMERGENCY SOS ALERT\n\nYour Location:\nLatitude: ${mockLatitude}\nLongitude: ${mockLongitude}\n\nThis would be sent to emergency services in production.`);
  };

  return (
    <div style={{ marginTop: '20px', textAlign: 'center' }}>
      <button
        onClick={handleSOS}
        style={{
          padding: '16px 32px',
          backgroundColor: '#dc2626',
          color: 'white',
          borderRadius: '50px',
          border: 'none',
          fontSize: '18px',
          fontWeight: 'bold',
          cursor: 'pointer',
          boxShadow: '0 4px 15px rgba(220, 38, 38, 0.4)',
          transition: 'all 0.3s ease'
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.backgroundColor = '#b91c1c';
          e.currentTarget.style.transform = 'scale(1.05)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.backgroundColor = '#dc2626';
          e.currentTarget.style.transform = 'scale(1)';
        }}
      >
        🚨 EMERGENCY SOS
      </button>
      {status && (
        <p style={{ marginTop: '12px', color: '#fca5a5', fontSize: '14px' }}>
          {status}
        </p>
      )}
    </div>
  );
}