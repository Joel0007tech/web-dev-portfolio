import React from 'react'
import {BrowserRouter, Routes, Route} from "react-router-dom";
import './App.css'
import Home from './Components/Home'

const App = () => {
  return (
    <div>
      <BrowserRouter>
     <Routes>
     <Route path="/" element={<Home/>}  />
      </Routes>
  </BrowserRouter>
    </div>
  )
}

export default App