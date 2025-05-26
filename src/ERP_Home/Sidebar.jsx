import { Row, Col, Nav } from 'react-bootstrap';
import { NavLink, Outlet } from 'react-router-dom';
import './Sidebar.css';

function SidebarLayout({ children }) {
  return (
    <div className="container-fluid px-0 mx-0">
      {/* Use d-flex to make Row behave like flexbox */}
      <Row className="d-flex flex-nowrap">
        {/* Sidebar */}
        <Col className="sidebar text-white min-vh-100 p-3">
          <h5 className="mb-4">Payroll Management</h5>
          <Nav className="flex-column">
            <Nav.Link as={NavLink} to="/" end className="text-white">Home</Nav.Link>
             <Nav.Link as={NavLink} to="/Employees" className="text-white">Employee Detail</Nav.Link>
            <Nav.Link as={NavLink} to="/about" className="text-white">Generate Payroll</Nav.Link>
            <Nav.Link as={NavLink} to="/services" className="text-white">Tax Setup</Nav.Link>
            <Nav.Link as={NavLink} to="/services" className="text-white">Leave Management</Nav.Link>
            <Nav.Link as={NavLink} to="/contact" className="text-white">Reports</Nav.Link>
            <Nav.Link as={NavLink} to="/contact" className="text-white">Payroll Setup</Nav.Link>
          </Nav>
        </Col>

        {/* Main content takes remaining width */}
        <Col className="p-4 flex-grow-1">
          {children || <Outlet />}
        </Col>
      </Row>
    </div>
  );
}

export default SidebarLayout;
