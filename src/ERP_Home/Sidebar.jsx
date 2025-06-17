import { Row, Col, Nav } from 'react-bootstrap';
import { NavLink, Outlet } from 'react-router-dom';
import {
  FaHome,
  FaChartPie,
  FaUserShield,
  FaPuzzlePiece,
  FaDownload,
  FaLightbulb,
  FaEnvelopeOpenText,
} from 'react-icons/fa'; // Replaced some icons to better match names
import './Sidebar.css';

function SidebarLayout({ children }) {
  return (
    <div className="container-fluid px-0 mx-0">
      <Row className="d-flex flex-nowrap">
        {/* Sidebar */}
        <div
          className="sidebar text-white p-3"
          style={{
            width: '250px',
            minHeight: '100vh',
            backgroundColor: '#142141',
          }}
        >
          <h5 className="mb-4">ERP Main</h5>
          <Nav className="flex-column">

            <Nav.Link as={NavLink} to="/Home" end className="text-white">
              <FaHome className="me-2" style={{ color: '#00d1b2' }} /> Setup
            </Nav.Link>

            <Nav.Link as={NavLink} to="/Employees" className="text-white">
              <FaChartPie className="me-2" style={{ color: '#ff3860' }} /> Reports
            </Nav.Link>

            <Nav.Link as={NavLink} to="/GeneratePayroll" className="text-white">
              <FaUserShield className="me-2" style={{ color: '#3273dc' }} /> Users
            </Nav.Link>

            <Nav.Link as={NavLink} to="/TaxSetup" className="text-white">
              <FaPuzzlePiece className="me-2" style={{ color: '#ffdd57' }} /> Modules
            </Nav.Link>

            <Nav.Link as={NavLink} to="/LeaveManagement" className="text-white">
              <FaDownload className="me-2" style={{ color: '#23d160' }} /> Downloads
            </Nav.Link>

            <Nav.Link as={NavLink} to="/Reports" className="text-white">
              <FaLightbulb className="me-2" style={{ color: '#ff851b' }} /> Suggestions
            </Nav.Link>

            <Nav.Link as={NavLink} to="/PayrollSetup" className="text-white">
              <FaEnvelopeOpenText className="me-2" style={{ color: '#b86bff' }} /> Mails
            </Nav.Link>

          </Nav>
        </div>

        {/* Main content */}
        <Col className="p-4 flex-grow-1" style={{ height: '100vh', overflowY: 'auto' }}>
          {children || <Outlet />}
        </Col>
      </Row>
    </div>
  );
}

export default SidebarLayout;
