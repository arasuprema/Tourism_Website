// src/App.js
import React from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import ServicePage from './Component/ServicePage';
// import ServiceDetail from './Component/ServiceDetail';
import Contact from './Component/Contact';

const App = () => {
  return (
    // <ServicePage/>
    <Contact/>

    // <Router>
    //   <Routes>
    //     <Route path="/" element={<ServicePage />} />
    //     <Route path="/service/:id" element={<ServiceDetails />} />
    //     <Route path="/contact" element={<Contact />} />
    //   </Routes>
    // </Router>
  );
};

export default App;
