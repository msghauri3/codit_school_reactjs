import { Row, Col, Nav } from 'react-bootstrap';
import { NavLink, Outlet } from 'react-router-dom';
import {
  FaHome,
  FaUsers,
  FaMoneyCheckAlt,
  FaPercentage,
  FaCalendarCheck,
  FaChartBar,
  FaCogs,
} from 'react-icons/fa';
import './Sidebar.css';

function SidebarLayout({ children }) {
  return (
    <div className="container-fluid px-0 mx-0">
      <Row className="d-flex flex-nowrap">
        {/* Sidebar with fixed width and full height */}
        <div className="sidebar text-white p-3" style={{ width: '250px', minHeight: '100vh', backgroundColor: '#142141' }}>
          <h5 className="mb-4">ERP</h5>
          <Nav className="flex-column">
            <Nav.Link as={NavLink} to="/Home" end className="text-white">
              <FaHome className="me-2" /> Home
            </Nav.Link>
            <Nav.Link as={NavLink} to="/Employees" className="text-white">
              <FaUsers className="me-2" /> Employee Detail
            </Nav.Link>
            <Nav.Link as={NavLink} to="/GeneratePayroll" className="text-white">
              <FaMoneyCheckAlt className="me-2" /> Payroll
            </Nav.Link>
            <Nav.Link as={NavLink} to="/TaxSetup" className="text-white">
              <FaPercentage className="me-2" /> Tax Setup
            </Nav.Link>
            <Nav.Link as={NavLink} to="/LeaveManagement" className="text-white">
              <FaCalendarCheck className="me-2" /> Leave Management
            </Nav.Link>
            <Nav.Link as={NavLink} to="/Reports" className="text-white">
              <FaChartBar className="me-2" /> Reports
            </Nav.Link>
            <Nav.Link as={NavLink} to="/PayrollSetup" className="text-white">
              <FaCogs className="me-2" /> Payroll Setup
            </Nav.Link>
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
