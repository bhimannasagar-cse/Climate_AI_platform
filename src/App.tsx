import { useState } from 'react';
import { useClimateStore } from './store/useClimateStore';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import SOSButton from './components/ui/SOSButton';

function App() {
  const [cityInput, setCityInput] = useState('');
  const { temperature, humidity, windSpeed, location, isLoading, error, fetchClimateData } = useClimateStore();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (cityInput.trim()) {
      fetchClimateData(cityInput);
    }
  };

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#0f172a', color: 'white', padding: '24px' }}>
      <h1 style={{ fontSize: '28px', fontWeight: 'bold', textAlign: 'center', marginBottom: '24px' }}>
        🌍 Climate AI Platform
      </h1>
      
      <form onSubmit={handleSearch} style={{ maxWidth: '500px', margin: '0 auto', display: 'flex', gap: '8px', marginBottom: '32px' }}>
        <input
          type="text"
          value={cityInput}
          onChange={(e) => setCityInput(e.target.value)}
          placeholder="Enter city name..."
          style={{ flex: 1, padding: '12px', borderRadius: '8px', backgroundColor: '#1e293b', border: '1px solid #334155', color: 'white' }}
        />
        <button
          type="submit"
          disabled={isLoading}
          style={{ padding: '12px 24px', backgroundColor: '#2563eb', color: 'white', borderRadius: '8px', border: 'none', cursor: 'pointer' }}
        >
          {isLoading ? '⏳' : '🔍 Search'}
        </button>
      </form>

      {error && (
        <div style={{ maxWidth: '500px', margin: '0 auto 16px', padding: '16px', backgroundColor: 'rgba(239,68,68,0.2)', border: '1px solid #ef4444', borderRadius: '8px', color: '#fca5a5' }}>
          {error}
        </div>
      )}

      {location && (
        <div style={{ maxWidth: '500px', margin: '0 auto' }}>
          <h2 style={{ textAlign: 'center', marginBottom: '16px', color: '#94a3b8' }}>Weather in {location}</h2>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '16px' }}>
            <div style={{ backgroundColor: '#1e293b', padding: '24px', borderRadius: '12px', textAlign: 'center', border: '1px solid #334155' }}>
              <p style={{ color: '#94a3b8', fontSize: '14px' }}>🌡️ Temperature</p>
              <p style={{ fontSize: '36px', fontWeight: 'bold', color: '#fb923c' }}>{temperature}°C</p>
            </div>
            <div style={{ backgroundColor: '#1e293b', padding: '24px', borderRadius: '12px', textAlign: 'center', border: '1px solid #334155' }}>
              <p style={{ color: '#94a3b8', fontSize: '14px' }}>💧 Humidity</p>
              <p style={{ fontSize: '36px', fontWeight: 'bold', color: '#60a5fa' }}>{humidity}%</p>
            </div>
            <div style={{ backgroundColor: '#1e293b', padding: '24px', borderRadius: '12px', textAlign: 'center', border: '1px solid #334155' }}>
  <p style={{ color: '#94a3b8', fontSize: '14px' }}>💨 Wind Speed</p>
  <p style={{ fontSize: '36px', fontWeight: 'bold', color: '#4ade80' }}>{windSpeed} km/h</p>
</div>
          </div>
          {/* AI Insight Box */}
<div style={{ 
  marginTop: '20px', 
  padding: '20px', 
  backgroundColor: 'rgba(147, 51, 234, 0.15)', 
  border: '1px solid rgba(147, 51, 234, 0.4)', 
  borderRadius: '16px',
  textAlign: 'left'
}}>
  <p style={{ color: '#c084fc', fontWeight: 'bold', marginBottom: '8px', fontSize: '16px' }}>
    🤖 AI Climate Insight
  </p>
  <p style={{ color: '#e2e8f0', lineHeight: '1.6' }}>
    {temperature > 35 ? "🔥 Extreme heat alert! Avoid outdoor activities between 11 AM - 4 PM. Stay hydrated and use sunscreen." : 
     temperature > 30 ? "🌡️ High temperature detected. Drink plenty of water and seek shade during peak hours." : 
     temperature > 20 ? "☀️ Pleasant weather conditions. Ideal for outdoor activities and exercise." : 
     temperature > 10 ? "🌤️ Cool and comfortable. Perfect weather for a light jacket and outdoor walks." : 
     temperature > 0 ? "❄️ Cold conditions. Wear warm clothing and limit prolonged outdoor exposure." : 
     "🥶 Freezing temperatures! Dress in layers and avoid outdoor activities if possible."}
  </p>
</div>
{/* Climate Chart */}
<div style={{ marginTop: '20px', padding: '20px', backgroundColor: '#1e293b', borderRadius: '12px', border: '1px solid #334155' }}>
  <h3 style={{ color: '#94a3b8', marginBottom: '16px', textAlign: 'center' }}>📊 Climate Data Visualization</h3>
  <ResponsiveContainer width="100%" height={200}>
    <BarChart data={[
      { name: 'Temp', value: temperature, fill: '#fb923c' },
      { name: 'Humidity', value: humidity, fill: '#60a5fa' },
      { name: 'Wind', value: windSpeed, fill: '#4ade80' }
    ]}>
      <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
      <XAxis dataKey="name" stroke="#94a3b8" />
      <YAxis stroke="#94a3b8" />
      <Tooltip contentStyle={{ backgroundColor: '#1e293b', border: '1px solid #334155', borderRadius: '8px', color: '#e2e8f0' }} />
      <Bar dataKey="value" radius={[8, 8, 0, 0]} />
    </BarChart>
  </ResponsiveContainer>
</div>
 <SOSButton />
        </div>
      )}

      {!location && !isLoading && (
        <div style={{ textAlign: 'center', marginTop: '48px', color: '#64748b' }}>
          <p style={{ fontSize: '48px' }}>🌤️</p>
          <p style={{ fontSize: '20px' }}>Search for a city to see climate data</p>
        </div>
        )}
      
      {/* Footer */}
<footer style={{ marginTop: '40px', textAlign: 'center', color: '#64748b', fontSize: '14px', paddingBottom: '20px' }}>
  <p>🌍 Climate AI Platform | Built for Hackathon 2026</p>
  <p style={{ marginTop: '8px' }}>Powered by Open-Meteo API | AI-Driven Insights</p>
</footer>
    </div>
   
  );
}

export default App;