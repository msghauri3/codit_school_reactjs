import React from 'react'
import Sidebar from './SideBar'

function Home() {
  return (
    <div style={{ textAlign: 'center', marginTop: '40px' }}>
      <style>{`
        .hrm-heading {
          font-size: 2.5rem;
          font-weight: bold;
          color: #2d3e50;
          margin-bottom: 20px;
          opacity: 0;
          transform: translateY(-30px);
          animation: fadeSlideIn 1s forwards;
        }
        .hrm-image {
          opacity: 0;
          transform: scale(0.95);
          animation: fadeInImg 1.2s 0.5s forwards;
        }
        @keyframes fadeSlideIn {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes fadeInImg {
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
      `}</style>
      <h1 className="hrm-heading">Welcome to HRM Home</h1>
      <img
        className="hrm-image"
        src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80"
        alt="HRM Illustration"
        style={{ maxWidth: '100%', height: 'auto', marginTop: '20px', borderRadius: '8px', boxShadow: '0 4px 16px rgba(0,0,0,0.12)' }}
      />
    </div>
  )
}

export default Home