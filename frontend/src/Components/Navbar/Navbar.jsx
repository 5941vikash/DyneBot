// React & UseState
import React, { useState } from "react";
// Navbar CSS
import "./Navbar.css";

// Logo
import Logo from "./Assets/Logo.png";

/* ------------- React Router Dom ------------- */
// NavLink
import { NavLink } from "react-router-dom";

/* ------------------- MUI Icons ------------------- */
// Down Arrow Icon
import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";
// Right Arrow Icon
import ArrowForwardOutlinedIcon from "@mui/icons-material/ArrowForwardOutlined";

// Team Component
import Team from "../Team/Team";
// DrawerNav Component
import DrawerNav from "./DrawerNav";

const Navbar = () => {
  // Build Team Dialog UseState
  const [openBuildTeamDialog, setOpenBuildTeamDialog] = useState(false);

  // Open Build Team Dialog Func
  const handleBuildTeamOpenDialog = () => {
    setOpenBuildTeamDialog(true);
  };

  // Close Build Team Dialog Func
  const handleBuildTeamCloseDialog = () => {
    setOpenBuildTeamDialog(false);
  };

  return (
    <>
      {/* Main Navbar */}
      <div className="navbar">
        <div className="innerNav">
          {/* Logo Box */}
          <div className="box">
            <NavLink to="/">
              {/* Logo */}
              <img src={Logo} alt="" className="logo" draggable="false" />
            </NavLink>
          </div>

          {/* List Box */}
          <div className="box">
            {/* Start Route */}
            <li>
              <NavLink to="/start" className="navLink">
                How to start
              </NavLink>
            </li>

            {/* Services Route */}
            <li>
              <NavLink to="/services" className="navLink">
                Services
              </NavLink>
              <KeyboardArrowDownOutlinedIcon
                sx={{
                  width: 24,
                  height: 24,
                }}
              />
            </li>

            {/* Technologies Route */}
            <li>
              <NavLink to="/technologies" className="navLink">
                Technologies
              </NavLink>
              <KeyboardArrowDownOutlinedIcon
                sx={{
                  width: 24,
                  height: 24,
                }}
              />
            </li>

            {/* Careers Route */}
            <li>
              <NavLink to="/careers" className="navLink">
                Careers
              </NavLink>
            </li>
          </div>

          {/* Button Box */}
          <div className="box">
            {/* Button */}
            <button onClick={handleBuildTeamOpenDialog}>
              <span>Build a team</span>
              <ArrowForwardOutlinedIcon
                sx={{
                  width: 18,
                  height: 15.5,
                  ml: 0.5,
                }}
              />
            </button>

            {/* Contact Route */}
            <li>
              <NavLink to="/contact" className="navLink">
                Contact Us
              </NavLink>
            </li>
          </div>

          {/* DrawerNav Component Box */}
          <div className="hide">
            <DrawerNav anchor={"right"} component="span" />
          </div>
        </div>
      </div>

      {/* Build Team Dialog Box */}
      <Team
        openBuildTeamDialog={openBuildTeamDialog}
        handleBuildTeamCloseDialog={handleBuildTeamCloseDialog}
      />
    </>
  );
};

export default Navbar;
