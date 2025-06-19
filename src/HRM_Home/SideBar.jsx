import { Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import {
  FaHome,
  FaUsers,
  FaChartLine,
  FaUserGraduate,
  FaClipboardCheck,
  FaSignOutAlt,
} from 'react-icons/fa';
import './Sidebar.css';

function SideBarHRM() {
  return (
    <div
      className="sidebar text-white p-3"
      style={{ width: '250px', minHeight: '100vh', backgroundColor: '#142141' }}
    >
      <h5 className="mb-4">Employees Detail</h5>
      <Nav className="flex-column">

        <Nav.Link as={NavLink} to="./DashboardHRM" end className="text-white">
          <FaHome className="me-2" style={{ color: '#00d1b2' }} /> Dashboard
        </Nav.Link>

        <Nav.Link as={NavLink} to="./EmployeesDetail" end className="text-white">
          <FaHome className="me-2" style={{ color: '#ffdd57' }} /> Detail
        </Nav.Link>

        <Nav.Link as={NavLink} to="./Employees" className="text-white">
          <FaUsers className="me-2" style={{ color: '#ff3860' }} /> By Departments
        </Nav.Link>

        <Nav.Link as={NavLink} to="./GeneratePayroll" className="text-white">
          <FaChartLine className="me-2" style={{ color: '#3273dc' }} /> By Designations
        </Nav.Link>

        <Nav.Link as={NavLink} to="./TaxSetup" className="text-white">
          <FaUserGraduate className="me-2" style={{ color: '#ffdd57' }} /> By Locations
        </Nav.Link>

        <Nav.Link as={NavLink} to="./Reports" className="text-white">
          <FaSignOutAlt className="me-2" style={{ color: '#b86bff' }} /> Reports
        </Nav.Link>

        <Nav.Link as={NavLink} to="./UploadExcel" className="text-white">
          <FaUserGraduate className="me-2" style={{ color: '#ffdd57' }} /> Upload File
        </Nav.Link>

      </Nav>
    </div>
  );
}

export default SideBarHRM;
