import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './Navbar.css';   // Import the stylesheet

function NavbarHome() {
  return (
    <Navbar className="custom-navbar" expand="lg" bg="light" variant="light">
      {/* Brand or ERP bold text */}
      <Navbar.Brand href="#home" className="ms-3 fw-bold">ERP</Navbar.Brand>

      {/* Nav links */}
      <Nav className="me-auto">
        <Nav.Link href="hr">Human Resources (HR)</Nav.Link>
        <Nav.Link href="reports">Reports & Analytics</Nav.Link>
        <Nav.Link href="#settings-admin">Settings / Administration</Nav.Link>
      </Nav>

      {/* Right aligned Nav for Login and Settings */}
      <Nav className="ms-auto">
        <Nav.Link href="#login">Login</Nav.Link>
        <Nav.Link href="#settings">Settings</Nav.Link>
      </Nav>
    </Navbar>
  );
}

export default NavbarHome;
