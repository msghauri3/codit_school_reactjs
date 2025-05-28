import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './Navbar.css';   // Import the stylesheet

function NavbarHome() {
  return (
    <Navbar className="custom-navbar" expand="lg" bg="light" variant="light">
      {/* Brand or ERP bold text */}
      <Navbar.Brand href="/HRM" className="ms-3 fw-bold">Finance</Navbar.Brand>

      {/* Nav links */}
      <Nav className="me-auto">
        <Nav.Link href="/HRM/Employees">Employees</Nav.Link>
        <Nav.Link href="/HRM/Payroll">Payroll</Nav.Link>
        <Nav.Link href="/HRM/Leaves">Leaves </Nav.Link>
        <Nav.Link href="/">Back To ERP</Nav.Link>
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
