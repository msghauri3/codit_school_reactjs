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
    <div className="d-flex flex-nowrap">
      




<Row className="d-flex flex-nowrap">
  {/* Sidebar */}
  <Col xs={2} className="sidebar text-white p-3" style={{ backgroundColor: '#142141', minHeight: '100vh' }}>
    <h5 className="mb-4">ERP Main</h5>
    <Nav className="flex-column">
      <Nav.Link as={NavLink} to="/HRM" end className="text-white">
        <FaUserShield className="me-2" style={{ color: '#3273dc' }} /> HR
      </Nav.Link>
    </Nav>
  </Col>

  {/* Main Content */}
  <Col className="p-4 flex-grow-1">
    {children || <Outlet />}
  </Col>
</Row>


    </div>
  );
}

export default SidebarLayout;
