import { Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { FaHome, FaUsers, FaChartLine, FaUserGraduate, FaClipboardCheck, FaSignOutAlt, FaChartPie } from 'react-icons/fa';
import './Sidebar.css';

function SideBarHRM() {
  return (
    <div
      className="sidebar text-white p-3"
      style={{ width: '250px', minHeight: '100vh', backgroundColor: '#142141' }}
    >
      <h5 className="mb-4">Finance</h5>
      <Nav className="flex-column">
        <Nav.Link as={NavLink} to="./" end className="text-white">
          <FaHome className="me-2" /> Home
        </Nav.Link>
        <Nav.Link as={NavLink} to="./ChartOfAccount" className="text-white">
          <FaUsers className="me-2" /> Chart of Accounts
        </Nav.Link>
        <Nav.Link as={NavLink} to="./GeneratePayroll" className="text-white">
          <FaChartLine className="me-2" /> Journal Entries
        </Nav.Link>
        <Nav.Link as={NavLink} to="/TaxSetup" className="text-white">
          <FaUserGraduate className="me-2" /> Posting Periods
        </Nav.Link>
        <Nav.Link as={NavLink} to="/LeaveManagement" className="text-white">
          <FaClipboardCheck className="me-2" /> Trial Balance
        </Nav.Link>
        <Nav.Link as={NavLink} to="/Reports" className="text-white">
          <FaSignOutAlt className="me-2" /> Financial Statements
        </Nav.Link>
        <Nav.Link as={NavLink} to="/PayrollSetup" className="text-white">
          <FaChartPie className="me-2" /> Audit Trail / Logs
        </Nav.Link>
      </Nav>
    </div>
  );
}

export default SideBarHRM;
