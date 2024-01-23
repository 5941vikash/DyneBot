// React & UseState
import React, { useState } from "react";
// DrawerNav CSS
import "./DrawerNav.css";

/* ------------- React Router Dom ------------- */
// NavLink
import { NavLink } from "react-router-dom";

/* ------------------- MUI Component ------------------- */
// Button
import Button from "@mui/material/Button";
// Box
import Box from "@mui/material/Box";
// Drawer
import Drawer from "@mui/material/Drawer";

/* ------------------- MUI Icons ------------------- */
// Down Arrow Icon
import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";
// Right Arrow Icon
import ArrowForwardOutlinedIcon from "@mui/icons-material/ArrowForwardOutlined";
// Menu Icon
import MenuIcon from "@mui/icons-material/Menu";

// NavPages
import { navServicesPages, navTechnologyPages } from "./NavPages";

// Team Component
import Team from "../Team/Team";

const DrawerNav = (props) => {
  // Props
  const { anchor, scrollNav } = props;

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

  // Drawer UseState
  const [state, setState] = useState({
    right: false,
  });

  // Toogle Drawer Func
  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setState({ ...state, [anchor]: open });
  };

  // Open Drop UseState
  const [openDrop, setOpenDrop] = useState([false, false]);

  // Handle Drop Func
  const handleDrop = (index) => {
    const newDrop = [...openDrop];
    newDrop[index] = !openDrop[index];
    setOpenDrop(newDrop);
  };

  // List Func
  const list = (anchor) => (
    // Main Box
    <Box
      sx={{
        width: 250,
        display: "flex",
        justifyContent: "center",
        alignItems: "flex-start",
        flexDirection: "column",
      }}
      role="presentation"
      className="drawerNav"
    >
      {/* Start Route */}
      <li>
        <NavLink
          onClick={toggleDrawer(anchor, false)}
          onKeyDown={toggleDrawer(anchor, false)}
          to="/start"
          className="navLink"
        >
          How to start
        </NavLink>
      </li>

      {/* Services Route */}
      <li>
        <NavLink
          onClick={toggleDrawer(anchor, false)}
          onKeyDown={toggleDrawer(anchor, false)}
          to="/services"
          className="navLink"
        >
          Services
        </NavLink>
        {/* Dropdown Icon */}
        <KeyboardArrowDownOutlinedIcon
          sx={{
            width: 24,
            height: 24,
            transform: openDrop[0] ? "rotate(180deg)" : "rotate(0deg)",
          }}
          onClick={() => {
            handleDrop(0);
          }}
        />
      </li>

      {/* Service Dropdown Box */}
      <li
        className="menuBox"
        style={{
          display: openDrop[0] ? "flex" : "none",
        }}
      >
        {navServicesPages.map((e, i) => {
          return (
            <NavLink
              className="menu"
              to={`/${e.link}`}
              key={i}
              onClick={toggleDrawer(anchor, false)}
              onKeyDown={toggleDrawer(anchor, false)}
            >
              {e.name}
            </NavLink>
          );
        })}
      </li>

      {/* Technologies Route */}
      <li>
        <NavLink
          onClick={toggleDrawer(anchor, false)}
          onKeyDown={toggleDrawer(anchor, false)}
          to="/technologies"
          className="navLink"
        >
          Technologies
        </NavLink>
        {/* Dropdown Icon */}
        <KeyboardArrowDownOutlinedIcon
          sx={{
            width: 24,
            height: 24,
            transform: openDrop[1] ? "rotate(180deg)" : "rotate(0deg)",
          }}
          onClick={() => {
            handleDrop(1);
          }}
        />
      </li>
      {/* Technology Dropdown Box*/}
      <li
        className="menuBox"
        style={{
          display: openDrop[1] ? "flex" : "none",
        }}
      >
        {navTechnologyPages.map((e, i) => {
          return (
            <NavLink
              className="menu"
              to={`/${e.link}`}
              key={i}
              onClick={toggleDrawer(anchor, false)}
              onKeyDown={toggleDrawer(anchor, false)}
            >
              {e.name}
            </NavLink>
          );
        })}
      </li>

      {/* Careers Route */}
      <li>
        <NavLink
          onClick={toggleDrawer(anchor, false)}
          onKeyDown={toggleDrawer(anchor, false)}
          to="/careers"
          className="navLink"
        >
          Careers
        </NavLink>
      </li>

      {/* Contact Route */}
      <li>
        <NavLink
          onClick={toggleDrawer(anchor, false)}
          onKeyDown={toggleDrawer(anchor, false)}
          to="/contact"
          className="navLink"
        >
          Contact Us
        </NavLink>
      </li>

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
    </Box>
  );

  return (
    <>
      <React.Fragment key={anchor}>
        <Button onClick={toggleDrawer(anchor, true)}>
          {/* Menu Icon */}
          <MenuIcon
            sx={{
              fontSize: "2rem",
              m: 0,
              p: 0,
              color: scrollNav === 0 ? "#fff" : "#16205f",
            }}
          />
        </Button>
        {/* Drawer */}
        <Drawer
          anchor={anchor}
          open={state[anchor]}
          onClose={toggleDrawer(anchor, false)}
        >
          {list(anchor)}
        </Drawer>
      </React.Fragment>

      {/* Build Team Dialog Box */}
      <Team
        openBuildTeamDialog={openBuildTeamDialog}
        handleBuildTeamCloseDialog={handleBuildTeamCloseDialog}
      />
    </>
  );
};

export default DrawerNav;
