import './App.css';
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from "./Components/Navigation/Navbar.jsx";
import Home from './Components/Home/Home.jsx';
import Dashboard from './Components/Dashboard/Dashboard.jsx';  // Your Dashboard page component
import About from './Components/AboutUs/About.jsx';  // About Us page
import Contact from './Components/ContactUs/Contact.jsx';  // Contact Us page
import Login from './Components/Login/Login.jsx';  // Login page

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Navbar at the top */}
      <Navbar />

      {/* Main content */}
      <div className="flex-1 bg-white overflow-y-auto p-0 m-0">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />      
        </Routes>
      </div>
    </div>
  );
}

export default App;

