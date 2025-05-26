import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './Navbar.css';   // Import the stylesheet

function NavbarHome() {
  return (
    <Navbar className="custom-navbar" expand="lg" bg="light" variant="light">
      {/* Brand or ERP bold text */}
      <Navbar.Brand href="/" className="ms-3 fw-bold">ERP Home</Navbar.Brand>

      {/* Nav links */}
      <Nav className="me-auto">
        <Nav.Link href="HRM">ERP</Nav.Link>
        <Nav.Link href="Reports">Finance & Accounting</Nav.Link>
        <Nav.Link href="Analytics">Procurement</Nav.Link>
        <Nav.Link href="Administration">Inventory</Nav.Link>
        <Nav.Link href="Administration">Supply Chain</Nav.Link>
        <Nav.Link href="Administration">  CRM</Nav.Link>
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
