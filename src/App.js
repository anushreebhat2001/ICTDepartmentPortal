import React from "react";
import './App.css';
import Navbar from "./components/Navbar";
import Navbar1 from "./components/Navbar/navbar1";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './pages';
import Research from './pages/research';
import Contact from './pages/contact';
import Placements from './pages/placements';
import QP from './pages/qp';
import Footer from "./components/Footer/footer";

function App() {
  return (
    <Router>
    <Navbar1/> 
      <Navbar />
      <Routes> 
        <Route path="/" element={<Home/>} />
        <Route path="/research" element={<Research/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/qp" element={<QP/>} />
        <Route path="/placements" element={<Placements/>} />
      </Routes>
    </Router>
  );
}

export default App;