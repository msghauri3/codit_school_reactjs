import Navbar from 'react-bootstrap/Navbar';
import './Topbar.css';

function Topbar() {
  return (
    <Navbar
      expand="lg"
      variant="dark"
      className="topbar"
      style={{ position: 'sticky', top: 0, zIndex: 1030 }}
    >
      <Navbar.Brand href="/" className="text-white">HRM Dashboard</Navbar.Brand>
      <Navbar.Collapse className="justify-content-end">
        <Navbar.Text className="text-white">
          Signed in as: <a href="#login" className="text-info">Mark Otto</a>
        </Navbar.Text>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Topbar;
