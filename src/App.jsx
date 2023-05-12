import React from 'react'
import {BrowserRouter, Routes, Route} from "react-router-dom";
import './App.css'
import Home from './Components/Home'
import About  from './Components/About';
import Skills from './Components/Skills';
import Contact from './Components/Contact';

const App = () => {
  return (
    <div>
      <BrowserRouter>
     <Routes>
     <Route path="/" element={<Home/>}  />
     <Route path="/about" element={<About/>}  />
     <Route path="/skills" element={<Skills/>}  />
     <Route path="/contact" element={<Contact/>}  />
      </Routes>
  </BrowserRouter>
    </div>
  )
}

export default App