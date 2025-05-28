import Navbar from 'react-bootstrap/Navbar';
import './Topbar.css';

function Topbar() {
  return (
<Navbar
  expand="lg"
  variant="dark"
  className="topbar"
  style={{ 
        position: 'sticky', 
        top: 0, 
        zIndex: 1030, 
        backgroundColor: '#ffc03d' // <- inline background color
      }}
  
>
  <div className="topbar-inner w-100 d-flex justify-content-between align-items-center">
    <Navbar.Brand href="/" className="text-info">ERP Dashboard</Navbar.Brand>
    <Navbar.Text className="text-white">
      Signed in as: <span className="text-info">ERP Department</span>
    </Navbar.Text>
  </div>
</Navbar>

  );
}

export default Topbar;
