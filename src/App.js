<<<<<<< HEAD
// src/App.js
import React from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import ServicePage from './Component/ServicePage';
// import ServiceDetail from './Component/ServiceDetail';
import Contact from './Component/Contact';
=======

// import { Routes,Route, Link } from "react-router-dom";
// import Home from "./components/Home"
// import About from "./components/About"
// import Blog from "./components/Blog"
// import Contact from "./components/Contact"
// import Layout from "./components/Layout"
// import Gallery from "./components/Gallery"
import './App.css'
import Footer from "./components/Footer"

function App() 
>>>>>>> 221979a4a7838cb30928351b9d1f5567ac05685e

const App = () => {
  return (
<<<<<<< HEAD
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

=======
    <div className="App">

      </nav>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="about" element={<About/>}/>
        <Route path="contact" element={<Contact/>}/>
        <Route path="blog" element={<Blog/>}/>
        <Route path="layout" element={<Layout/>}/>
        <Route path="gallery" element={<Gallery/>}/>
      </Routes>
     */}
      <Footer />


import Footer from "./components/Footer"
import './App.css';

function App() {
    return (
        <div className="App">
            <Footer />
        </div>
    );

}

>>>>>>> 221979a4a7838cb30928351b9d1f5567ac05685e
export default App;
