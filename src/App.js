import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import About from "./about/About";
import Background from "./background/Background.js";
import Contact from "./contact/Contact";
import Nav from "./nav/Nav.js";
import PlayerStats from "./playerStats/PlayerStats.js";
import Projects from "./projects/Projects";
import Skills from "./skills/Skills";
import "./styles/app.css";

const App = () => {
  return (
  <Router>
      <Nav/>
      <Background/>
      <Routes>
        <Route path = "/" element = {<About/>}/>
        <Route path = "/skills" element = {<Skills/>}/>
        <Route path = "/projects" element = {<Projects/>}/>
        <Route path = "/contact" element = {<Contact/>}/>
      </Routes>

      <PlayerStats/>
  </Router>
  );
};

export default App;
