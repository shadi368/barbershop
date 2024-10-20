import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Home from './components/pages/Home'; // Ensure this component exists
import Services from './components/pages/services'; // Import the Services component

const App = () => {
  return (
    <Router>
      <div>
        <Navbar />
        {/* Routes should be inside the Router */}
        <Routes>
          <Route path="/" element={<Navigate to="/home" />} /> {/* Redirect to Home */}
          <Route path="/home" element={<Home />} />
          <Route path="/services" element={<Services />} />
     
        </Routes>
      </div>
    </Router>
  );
};

export default App;