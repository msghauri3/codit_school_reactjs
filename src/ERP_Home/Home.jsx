import React from 'react'
 

function Home() {
  return (
    <div style={{ minHeight: '100vh', width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <div style={{ maxWidth: '600px', width: '100%', textAlign: 'center' }}>
        <h1 style={{ fontSize: '2.5rem', fontWeight: 'bold', color: '#2d3e50', marginBottom: '20px' }}>Welcome to ERP Home</h1>
        <img
          src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=600&q=80"
          alt="ERP Illustration"
          style={{ maxWidth: '100%', height: 'auto', marginTop: '20px', borderRadius: '8px', boxShadow: '0 4px 16px rgba(0,0,0,0.12)' }}
        />
        <h2 style={{ marginTop: '30px', color: '#3a506b' }}>Your Enterprise Resource Planning Dashboard</h2>
        <p style={{ color: '#5c677d', fontSize: '1.1rem', marginTop: '10px' }}>
          Manage your business processes efficiently and effectively.
        </p>
      </div>
    </div>
  )
}

export default Home