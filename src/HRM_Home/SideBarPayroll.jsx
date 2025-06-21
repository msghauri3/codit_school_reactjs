import { Nav,NavDropdown  } from 'react-bootstrap';
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
  FaCoins, FaCashRegister
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

     <Nav.Link as={NavLink} to="./DashboardPayroll" end className="text-white">
          <FaUserTie className="me-2" style={{ color: '#00d1b2' }} /> Dashboard
        </Nav.Link>

        <Nav.Link as={NavLink} to="./PayrollEmp" end className="text-white">
          <FaUserTie className="me-2" style={{ color: '#00d1b2' }} /> Active Emp
        </Nav.Link>


       <Nav.Link as={NavLink} to="./GeneratePayroll" className="text-white">
          <FaUserTie className="me-2" style={{ color: '#b86bff' }} /> Generate Payroll
        </Nav.Link>


        <Nav.Link as={NavLink} to="./AllPayrolls" end className="text-white">
          <FaUserTie className="me-2" style={{ color: '#00d1b2' }} /> All Payrolls
        </Nav.Link>

        <Nav.Link as={NavLink} to="./TaxSlabGridPayroll" className="text-white">
          <FaPercentage className="me-2" style={{ color: '#ffdd57' }} /> Tax Slabs
        </Nav.Link>
{/* 
        <Nav.Link as={NavLink} to="./Employees" className="text-white">
          <FaPlusCircle className="me-2" style={{ color: '#23d160' }} /> Earning
        </Nav.Link> */}

        <Nav.Link as={NavLink} to="./DeductionGridPayroll" className="text-white">
          <FaMinusCircle className="me-2" style={{ color: '#ff3860' }} /> Deductions
        </Nav.Link>

        <NavDropdown title={<span className="text-white"><FaPlusCircle className="me-2" style={{ color: '#23d160' }} /> Earning</span>} id="earning-dropdown" className="text-white">
          <NavDropdown.Item as={NavLink} to="./BasicSalaryPayroll">
            <FaMoneyBillWave className="me-2" /> Basic Salary
          </NavDropdown.Item>
          <NavDropdown.Item as={NavLink} to="./BonusPayroll">
            <FaCoins className="me-2" /> Bonus
          </NavDropdown.Item>
          <NavDropdown.Item as={NavLink} to="./AllowancePayroll">
            <FaCashRegister className="me-2" /> Allowances
          </NavDropdown.Item>
        </NavDropdown>



        <Nav.Link as={NavLink} to="/LeaveManagement" className="text-white">
          <FaGift className="me-2" style={{ color: '#ff851b' }} /> Increments
        </Nav.Link>

        <Nav.Link as={NavLink} to="/Reports" className="text-white">
          <FaChartPie className="me-2" style={{ color: '#ff69b4' }} /> Reports
        </Nav.Link>

      </Nav>
    </div>
  );
}

export default SideBarHRM;
