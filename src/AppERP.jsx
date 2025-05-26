import React from 'react';
import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';
import HomeInterface from './ERP/Home';
import About from './HRM/About';
import Services from './HRM/Services';
import Contact from './HRM/Contact';
import { Container, Row, Col, Nav } from 'react-bootstrap';
import Topbar from './ERP/TopBar'
import Navbar from './ERP/Navbar'
import Sidebar from './ERP/Sidebar'
import ReportsPayRoll from './HRM/Reports'
import HR from './HRM/HR';
import Analytics from './HRM/Analytics';
import Administration from './HRM/Administration';
import Login from './HRM/Login';
import Settings from './HRM/Settings';
import Home from './HRM/Home';
import Employees from './HRM/Employees';
import GeneratePayroll from './HRM/GeneratePayroll';
import LeaveManagement from './HRM/LeaveManagement';
import PayrollSetup from './HRM/PayrollSetup';
import TaxSetup from './HRM/TaxSetup';





function AppERP() {
  return (
    <Router>
      <Container fluid>
        <Row >
          <Topbar />
          <Navbar />
          <Col >
            <Sidebar />
            {/* <h5 className="mb-4">ERP Menu</h5>
            <Nav className="flex-column">
              <Nav.Link as={NavLink} to="/" end className="text-white">Home</Nav.Link>
              <Nav.Link as={NavLink} to="/about" className="text-white">About</Nav.Link>
              <Nav.Link as={NavLink} to="/services" className="text-white">Services</Nav.Link>
              <Nav.Link as={NavLink} to="/contact" className="text-white">Contact</Nav.Link>
            </Nav> */}
          </Col>

          {/* Right-side content */}
          <Col md={9} className="p-4">
            <Routes>
              <Route path="/" element={<HomeInterface />} />
              <Route path="/Reports" element={<ReportsPayRoll />} />
              <Route path="/about" element={<About />} />
              <Route path="/services" element={<Services />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/HR" element={<HR />} />
              <Route path="/Analytics" element={<Analytics />} />
              <Route path="/Administration" element={<Administration />} />
              <Route path="/Login" element={<Login />} />
              <Route path="/Settings" element={<Settings />} />
              <Route path="/Home" element={<Home />} />
              <Route path="/Employees" element={<Employees />} />
              <Route path="/GeneratePayroll" element={<GeneratePayroll />} />
              <Route path="/LeaveManagement" element={<LeaveManagement />} />
              <Route path="/PayrollSetup" element={<PayrollSetup />} />
              <Route path="/TaxSetup" element={<TaxSetup />} />

            </Routes>
          </Col>
        </Row>
      </Container>
    </Router>
  );
}

export default AppERP;
