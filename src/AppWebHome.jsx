// src/AppWebHome.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from './Home_Web/Homepage';
import About from './Home_Web/pages/About';
import Services from './Home_Web/pages/Services';
import Banner from './Home_Web/components/Banner/Banner';
import ContentSection from './Home_Web/components/ContentSection/ContentSection';
import EducationManagementApp from './EducationManagement/App';
import EducationOnlineLogin from './EducationOnline/Login';

function AppWebHome() {
  return (
    <Router>
      <Routes>
        {/* Main Website Routes - uses Homepage layout with header */}
        <Route path="/" element={<Homepage />}>
          <Route index element={<div><Banner /><ContentSection /></div>} />
          <Route path="about" element={<About />} />
          <Route path="services" element={<Services />} />
          <Route path="attorneys" element={<div>Attorneys Page</div>} />
          <Route path="resources" element={<div>Resources Page</div>} />
          <Route path="news" element={<div>News Page</div>} />
          <Route path="blog" element={<div>Blog Page</div>} />
          <Route path="careers" element={<div>Careers Page</div>} />
          <Route path="contact" element={<div>Contact Page</div>} />
        </Route>

        {/* Education Management Routes - uses its own layout */}
        <Route path="/education-management/*" element={<EducationManagementApp />} />
        
        {/* Education Online Routes */}
        <Route path="/education-online" element={<EducationOnlineLogin />} />
      </Routes>
    </Router>
  );
}

export default AppWebHome;