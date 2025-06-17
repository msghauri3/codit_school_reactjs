import { Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import {
  FaUserTie,
  FaMoneyBillWave,
  FaPlusCircle,
  FaMinusCircle,
  FaPercentage,
  FaFileInvoiceDollar,
  FaGift,
  FaChartPie,
} from 'react-icons/fa';
import './Sidebar.css';

function SideBarHRM() {
  return (
    <div
      className="sidebar text-white p-3"
      style={{ width: '250px', minHeight: '100vh', backgroundColor: '#142141' }}
    >
      <h5 className="mb-4">Payroll</h5>
      <Nav className="flex-column">

        <Nav.Link as={NavLink} to="./" end className="text-white">
          <FaUserTie className="me-2" style={{ color: '#00d1b2' }} /> Employees Detail
        </Nav.Link>

        <Nav.Link as={NavLink} to="./Employees" className="text-white">
          <FaMoneyBillWave className="me-2" style={{ color: '#3273dc' }} /> Salaries Structure
        </Nav.Link>

        <Nav.Link as={NavLink} to="./Employees" className="text-white">
          <FaPlusCircle className="me-2" style={{ color: '#23d160' }} /> Earning
        </Nav.Link>

        <Nav.Link as={NavLink} to="/PayrollSetup" className="text-white">
          <FaMinusCircle className="me-2" style={{ color: '#ff3860' }} /> Deductions
        </Nav.Link>

        <Nav.Link as={NavLink} to="/TaxSetup" className="text-white">
          <FaPercentage className="me-2" style={{ color: '#ffdd57' }} /> Tax Setup
        </Nav.Link>

        <Nav.Link as={NavLink} to="./GeneratePayroll" className="text-white">
          <FaFileInvoiceDollar className="me-2" style={{ color: '#b86bff' }} /> Generate Payroll
        </Nav.Link>

        <Nav.Link as={NavLink} to="/LeaveManagement" className="text-white">
          <FaGift className="me-2" style={{ color: '#ff851b' }} /> Bonus & Increment
        </Nav.Link>

        <Nav.Link as={NavLink} to="/Reports" className="text-white">
          <FaChartPie className="me-2" style={{ color: '#ff69b4' }} /> Reports
        </Nav.Link>

      </Nav>
    </div>
  );
}

export default SideBarHRM;
