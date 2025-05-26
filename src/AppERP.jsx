import React from 'react';
import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';
import HomeInterface from './Home_Interface/Home';
import About from './Pay_Roll/About';
import Services from './Pay_Roll/Services';
import Contact from './Pay_Roll/Contact';
import { Container, Row, Col, Nav } from 'react-bootstrap';
import Topbar from './Home_Interface/TopBar'
import Navbar from './Home_Interface/Navbar'
import Sidebar from './Home_Interface/Sidebar'
import ReportsPayRoll from './Pay_Roll/Reports'
import HR from './Pay_Roll/HR';
import Analytics from './Pay_Roll/Analytics';
import Administration from './Pay_Roll/Administration';
import Login from './Pay_Roll/Login';
import Settings from './Pay_Roll/Settings'



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
             
            </Routes>
          </Col>
        </Row>
      </Container>
    </Router>
  );
}

export default AppERP;
