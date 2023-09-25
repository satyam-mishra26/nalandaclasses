import React from 'react'
import './App.css'
import Navbar from './component/Navbar.jsx'
import Hero from './component/Hero.jsx'
import Footer from './component/Footer.jsx'
import Toopers from './component/Toopers.jsx'
import Blog from './component/Blog.jsx'
import Contact from './component/Contact.jsx'
import Team from './component/Team.jsx'
import Stats from './component/Stats.jsx'
import Home from './component/Home.jsx'
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
    <Router>
      <Navbar tranparent/>
      <Hero/>
      <Routes>
        <Route path="/" element={< Home/>} />
        <Route path="/Stats" element={<Stats />} />
        <Route  path="/Toopers" element={<Toopers />} />
        <Route  path="/Blog" element={<Blog />} />
        <Route  path="/Team" element={<Team />} />
        <Route  path="/Contact" element={<Contact />} />
      </Routes>
      <Footer/>
    </Router>

  )
}

export default App
