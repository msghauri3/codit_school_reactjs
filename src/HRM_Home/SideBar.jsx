import { Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import './Sidebar.css';

function SideBarHRM() {
  return (
    <div
      className="sidebar text-white p-3"
      style={{ width: '250px', minHeight: '100vh', backgroundColor: '#142141' }}
    >
      <h5 className="mb-4">HRM</h5>
      <Nav className="flex-column">
        <Nav.Link as={NavLink} to="./" end className="text-white">Home</Nav.Link>
        <Nav.Link as={NavLink} to="./Employees" className="text-white">Employee Detail</Nav.Link>
        <Nav.Link as={NavLink} to="./GeneratePayroll" className="text-white">Performance</Nav.Link>
        <Nav.Link as={NavLink} to="/TaxSetup" className="text-white">Training</Nav.Link>
        <Nav.Link as={NavLink} to="/LeaveManagement" className="text-white"> Compliance</Nav.Link>
        <Nav.Link as={NavLink} to="/Reports" className="text-white">Separation</Nav.Link>
        <Nav.Link as={NavLink} to="/PayrollSetup" className="text-white">Reports-Analysis</Nav.Link>
      </Nav>
    </div>
  );
}

export default SideBarHRM;
