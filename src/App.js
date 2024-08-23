import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import './App.css';
import Header from './Header';
import Footer from './Footer';
import Home from './Home';
import Services from './Services';
import BuildingConstruction from './BuildingConstruction';
import RenovationsAndRemodelling from './RenovationsAndRemodeling';
import InteriorDesignAndFinishing from './InteriorDesignAndFinish';
import OutdoorAndLandscape from './OutdoorAndLandscape';
import RepairsAndMaintenance from './RepairsAndMaintenance';
import ConsultancyAndAdvisory from './ConsultancyAndAdvisory';
import Projects from './Projects';

const App = () => {
  return (
    <Router>
      <div className="App">
        <Header />  {/* Including the Header component */}
        <div style={{ paddingTop: '90px' }}>  {/* Adding padding to prevent overlap */}
          <Routes>
            <Route path="/" element={<Home />} />  {/* Render Home component at root path */}
            <Route path="/services" element={<Services />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/services/building-construction" element={<BuildingConstruction />} />
            <Route path="/services/renovations-remodeling" element={<RenovationsAndRemodelling />} />
            <Route path="/services/interior-design-finishing" element={<InteriorDesignAndFinishing />} />
            <Route path="/services/outdoor-landscaping" element={<OutdoorAndLandscape />} />
            <Route path="/services/repairs-maintenance" element={<RepairsAndMaintenance />} />
            <Route path="/services/consulting-advisory" element={<ConsultancyAndAdvisory />} />
            {/* Add more routes as needed */}
            <Route path="*" element={<Navigate to="/" replace />} /> {/* Redirect any unknown routes to / */}
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
