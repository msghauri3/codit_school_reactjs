import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './Navbar.css';   // Import the stylesheet

function NavbarHome() {
  return (
    <Navbar className="custom-navbar" expand="lg" bg="light" variant="light">
      {/* Brand or ERP bold text */}
      <Navbar.Brand href="/" className="ms-3 fw-bold">ERP</Navbar.Brand>

      {/* Nav links */}
      <Nav className="me-auto">
        <Nav.Link href="HR">HR</Nav.Link>
        <Nav.Link href="Reports">Reports</Nav.Link>
        <Nav.Link href="Analytics">Analytics</Nav.Link>
        <Nav.Link href="Administration">Administration</Nav.Link>
      </Nav>

      {/* Right aligned Nav for Login and Settings */}
      <Nav className="ms-auto">
        <Nav.Link href="Login">Login</Nav.Link>
        <Nav.Link href="Settings">Settings</Nav.Link>
      </Nav>
    </Navbar>
  );
}

export default NavbarHome;
