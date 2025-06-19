import { Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import {
  FaHome,
  FaUmbrellaBeach,
  FaBed,
  FaBriefcaseMedical,
  FaHeart,
  FaBaby,
  FaCogs,
} from 'react-icons/fa';
import './Sidebar.css';

function SideBarHRM() {
  return (
    <div
      className="sidebar text-white p-3"
      style={{ width: '250px', minHeight: '100vh', backgroundColor: '#142141' }}
    >
      <h5 className="mb-4">Leaves</h5>
      <Nav className="flex-column">

        <Nav.Link as={NavLink} to="./DashboardLeaves" end className="text-white">
          <FaHome className="me-2" style={{ color: '#00d1b2' }} /> Dashboard
        </Nav.Link>

        <Nav.Link as={NavLink} to="./LeavesCasual" className="text-white">
          <FaUmbrellaBeach className="me-2" style={{ color: '#3273dc' }} /> Casual Leaves
        </Nav.Link>

        <Nav.Link as={NavLink} to="./GeneratePayroll" className="text-white">
          <FaBed className="me-2" style={{ color: '#ff3860' }} /> Sick Leaves
        </Nav.Link>

        <Nav.Link as={NavLink} to="/TaxSetup" className="text-white">
          <FaBriefcaseMedical className="me-2" style={{ color: '#23d160' }} /> Earned Leaves
        </Nav.Link>

        <Nav.Link as={NavLink} to="/LeaveManagement" className="text-white">
          <FaHeart className="me-2" style={{ color: '#ff69b4' }} /> Compensation Leaves
        </Nav.Link>

        <Nav.Link as={NavLink} to="/Reports" className="text-white">
          <FaBaby className="me-2" style={{ color: '#ffdd57' }} /> Maternity Leaves
        </Nav.Link>

        <Nav.Link as={NavLink} to="/PayrollSetup" className="text-white">
          <FaCogs className="me-2" style={{ color: '#b86bff' }} /> Payroll Setup
        </Nav.Link>

      </Nav>
    </div>
  );
}

export default SideBarHRM;
