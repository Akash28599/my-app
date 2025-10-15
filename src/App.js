import './App.css';
import { FaHome, FaUser, FaFolderOpen, FaEnvelope, FaLinkedin } from "react-icons/fa"; 
import { useState } from 'react';
import Nav from './components/nav'
import Intro from './components/Intro'

function App() {
  return (
    <div className="App"> 
    <section id="Home">
    <Nav/>
    </section>
    <section id="About">
    <Intro/>
    </section>
    </div>
  );
}

export default App;
