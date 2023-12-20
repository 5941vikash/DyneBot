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

// Team Component
import Team from "../Team/Team";

const DrawerNav = (props) => {
  // Props
  const { anchor } = props;

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
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
      className="drawerNav"
    >
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
        {/* Dropdown Icon */}
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

      {/* Contact Route */}
      <li>
        <NavLink to="/contact" className="navLink">
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
              color: "#16205f",
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
