import React from "react";
import './App.css';
import Navbar from "./components/Navbar";
import Navbar1 from "./components/Navbar/navbar1";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './pages';
import About from "./pages/index";
import Forum from "./pages/Forum";
import Academics from "./pages/Academics";
import Faculty from "./pages/Faculty";
import News from "./pages/News";
import Events from "./pages/Events";
import Research from './pages/research';
import QP from './pages/qp';
import Placements from './pages/placements';
import Contact from './pages/contact';
import Footer from "./components/Footer/footer";

function App() {
  return (
    <Router basename="ICTDepartmentPortal">
    <Navbar1 /> 
    <Navbar />
      <Routes> 
        <Route path="/" element={<Home/>} />
        <Route path="/About" element={<About/>}/>
        <Route path="/Forum" element={<Forum/>} />
        <Route path="/Academics" element={<Academics/>} />
        <Route path="/Faculty" element={<Faculty/>} />
        <Route path="/News" element={<News/>} />
        <Route path="/Events" element={<Events/>} />
        <Route path="/research" element={<Research/>} />
        <Route path="/qp" element={<QP/>} />
        <Route path="/placements" element={<Placements/>} />
        <Route path="/contact" element={<Contact/>} />
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;