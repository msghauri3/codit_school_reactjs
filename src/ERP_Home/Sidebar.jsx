import { Row, Col, Nav } from 'react-bootstrap';
import { NavLink, Outlet } from 'react-router-dom';
import './Sidebar.css';

function SidebarLayout({ children }) {
  return (
    <div className="container-fluid px-0 mx-0">
      <Row className="d-flex flex-nowrap">
        {/* Sidebar with fixed width and full height */}
        <div className="sidebar text-white p-3">
          <h5 className="mb-4">ERP</h5>
          <Nav className="flex-column">
            <Nav.Link as={NavLink} to="/Home" end className="text-white">Home</Nav.Link>
            <Nav.Link as={NavLink} to="/Employees" className="text-white">Employee Detail</Nav.Link>
            <Nav.Link as={NavLink} to="/GeneratePayroll" className="text-white">Payroll</Nav.Link>
            <Nav.Link as={NavLink} to="/TaxSetup" className="text-white">Tax Setup</Nav.Link>
            <Nav.Link as={NavLink} to="/LeaveManagement" className="text-white">Leave Management</Nav.Link>
            <Nav.Link as={NavLink} to="/Reports" className="text-white">Reports</Nav.Link>
            <Nav.Link as={NavLink} to="/PayrollSetup" className="text-white">Payroll Setup</Nav.Link>
          </Nav>
        </div>

        {/* Main content with full height */}
        <Col className="p-4 flex-grow-1" style={{ height: '100vh', overflowY: 'auto' }}>
          {children || <Outlet />}
        </Col>
      </Row>
    </div>
  );
}

export default SidebarLayout;
