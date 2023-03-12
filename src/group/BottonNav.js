import React, { useState } from "react";
import './BottomNav.scss'
import './FontAwe'
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const BottomNav = () => {
  const [activeNav, setActiveNav] = useState(1);
  return (
    <nav className="wrapper">
      <div>
        <Link to="/first" className="nav-link" onClick = {() => setActiveNav(1)}>
          <FontAwesomeIcon icon="people-group" className = {activeNav === 1? "nav-item active ": "nav-item"} /> 
        </Link>
      </div>
      <div>
        <Link to="/second" className="nav-link" onClick = {() => setActiveNav(2)}>
          <FontAwesomeIcon icon="tower-cell" className = {activeNav === 2? "nav-item active ": "nav-item"}/>
        </Link>
      </div>
      <div>
        <Link to="/third" className="nav-link" onClick = {() => setActiveNav(3)}>
          <FontAwesomeIcon icon="paintbrush" className = {activeNav === 3? "nav-item active ": "nav-item"}/>
        </Link>
      </div>
      <div>
        <Link to="/fourth" className="nav-link" onClick = {() => setActiveNav(4)}>
          <FontAwesomeIcon icon="desktop" className = {activeNav === 4? "nav-item active ": "nav-item"}/>
        </Link>
      </div>

    </nav>
  );
};

export default BottomNav;