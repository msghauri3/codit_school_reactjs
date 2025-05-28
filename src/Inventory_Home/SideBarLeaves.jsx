import { Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import './Sidebar.css';

function SideBarHRM() {
  return (
    <div
      className="sidebar text-white p-3"
      style={{ width: '250px', minHeight: '100vh', backgroundColor: '#142141' }}
    >
      <h5 className="mb-4">Leaves</h5>
      <Nav className="flex-column">
        <Nav.Link as={NavLink} to="./" end className="text-white">Home</Nav.Link>
        <Nav.Link as={NavLink} to="./Employees" className="text-white">Casual Leaves</Nav.Link>
        <Nav.Link as={NavLink} to="./GeneratePayroll" className="text-white">Sick Leaves</Nav.Link>
        <Nav.Link as={NavLink} to="/TaxSetup" className="text-white">Earned Leaves</Nav.Link>
        <Nav.Link as={NavLink} to="/LeaveManagement" className="text-white">Compensation Leaves</Nav.Link>
        <Nav.Link as={NavLink} to="/Reports" className="text-white">Maternity Leaves</Nav.Link>
        <Nav.Link as={NavLink} to="/PayrollSetup" className="text-white">Payroll Setup</Nav.Link>
      </Nav>
    </div>
  );
}

export default SideBarHRM;
