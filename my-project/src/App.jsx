import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Home from './components/pages/Home'; // Ensure this component exists
import Services from './components/pages/Services'; // Import the Services component

const App = () => {
  return (
    <Router>
      <div>
        <Navbar />
        {/* Routes should be inside the Router */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} /> {/* Add route for Services page */}
          {/* Add more routes here if needed */}
        </Routes>
      </div>
    </Router>
  );
};

export default App;
