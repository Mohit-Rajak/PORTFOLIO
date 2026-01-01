import React from "react";
import { Routes, Route } from "react-router-dom";
import "./index.css";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Project from "./pages/Project";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";


const App = () => {
  return (
  <div className="px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]">
         <Navbar/>
         <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/contact' element={<Contact/>}/>
            <Route path='/project' element={<Project/>} />
         </Routes>
          <Footer/>
    </div>
  );
};

export default App;
