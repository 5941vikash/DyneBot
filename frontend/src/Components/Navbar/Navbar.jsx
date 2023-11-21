import React from "react";
import "./Navbar.css";
import Logo from "./Assets/Logo.png";

import useNavigate from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="navbar">
        <div className="box">
          <img src={Logo} alt="" className="logo" />
        </div>
        <div className="box">
          <li>How to start</li>
          <li>Services</li>
          <li>Technologies</li>
          <li>Careers</li>
        </div>
        <div className="box">
          <button>Build a team</button>
          <li>Contact Us</li>
        </div>
      </div>
    </>
  );
};

export default Navbar;
