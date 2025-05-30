import { Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import './Sidebar.css';

function SideBarHRM() {
  return (
    <div
      className="sidebar text-white p-3"
      style={{ width: '250px', minHeight: '100vh', backgroundColor: '#142141' }}
    >
      <h5 className="mb-4">Procurement</h5>
      <Nav className="flex-column">
        <Nav.Link as={NavLink} to="./" end className="text-white">Employees Detail</Nav.Link>
        <Nav.Link as={NavLink} to="./Employees" className="text-white">Salaries Strcture</Nav.Link>
        <Nav.Link as={NavLink} to="./Employees" className="text-white">Earning</Nav.Link>
        <Nav.Link as={NavLink} to="/PayrollSetup" className="text-white">Deductions</Nav.Link>
        <Nav.Link as={NavLink} to="/TaxSetup" className="text-white">Tax Setup</Nav.Link>
        <Nav.Link as={NavLink} to="./GeneratePayroll" className="text-white">Generate Payroll</Nav.Link>        
        <Nav.Link as={NavLink} to="/LeaveManagement" className="text-white">Bonus & Increment</Nav.Link>
        <Nav.Link as={NavLink} to="/Reports" className="text-white">Reports</Nav.Link>
      </Nav>
    </div>
  );
}

export default SideBarHRM;
