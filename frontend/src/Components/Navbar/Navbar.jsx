// React & UseState
import React, { useState, useEffect } from "react";
// Navbar CSS
import "./Navbar.css";

// Logo
import Logo from "./Assets/Logo.png";

/* ------------- React Router Dom ------------- */
// NavLink
import { NavLink, useLocation } from "react-router-dom";

/* ------------------- MUI Icons ------------------- */
// Down Arrow Icon
import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";
// Right Arrow Icon
import ArrowForwardOutlinedIcon from "@mui/icons-material/ArrowForwardOutlined";

/* ------------------- MUI Components ------------------- */
// Menu
import Menu from "@mui/material/Menu";
// Menu Item
import MenuItem from "@mui/material/MenuItem";

// Team Component
import Team from "../Team/Team";
// DrawerNav Component
import DrawerNav from "./DrawerNav";

// NavPages
import { navServicesPages, navTechnologyPages } from "./NavPages";

const Navbar = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  
  // Menu Anchor
  const [anchorEl, setAnchorEl] = useState([null, null]); // Initialize with null for each icon

  // Open Menu
  const handleClick = (event, index) => {
    const newAnchorEl = [...anchorEl];
    newAnchorEl[index] = event.currentTarget;
    setAnchorEl(newAnchorEl);
  };

  // Close Menu
  const handleClose = (index) => {
    const newAnchorEl = [...anchorEl];
    newAnchorEl[index] = null;
    setAnchorEl(newAnchorEl);
  };

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
              {/* Dropdown Menu */}
              <div>
                <KeyboardArrowDownOutlinedIcon
                  id="basic-button"
                  aria-controls={anchorEl[0] ? "basic-menu" : undefined}
                  aria-haspopup="true"
                  aria-expanded={anchorEl[0] ? "true" : undefined}
                  onClick={(event) => handleClick(event, 0)}
                  sx={{
                    width: 24,
                    height: 24,
                    transform: Boolean(anchorEl[0])
                      ? "rotate(180deg)"
                      : "rotate(0deg)",
                  }}
                />
                <Menu
                  id="basic-menu"
                  anchorEl={anchorEl[0]}
                  open={Boolean(anchorEl[0])}
                  onClose={() => handleClose(0)}
                  MenuListProps={{
                    "aria-labelledby": "basic-button",
                  }}
                  PaperProps={{
                    elevation: 0,
                    sx: {
                      overflow: "visible",
                      filter: "drop-shadow(0px 1px 2px rgba(0,0,0,0.32))",
                      mt: 1.5,
                      "& .MuiAvatar-root": {
                        width: 32,
                        height: 32,
                        ml: -0.5,
                        mr: 1,
                      },
                      "&::before": {
                        content: '""',
                        display: "block",
                        position: "absolute",
                        top: 0,
                        right: 6,
                        width: 10,
                        height: 10,
                        bgcolor: "background.paper",
                        transform: "translateY(-50%) rotate(45deg)",
                        zIndex: 0,
                      },
                    },
                  }}
                  transformOrigin={{ horizontal: "right", vertical: "top" }}
                  anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
                >
                  {navServicesPages.map((e, i) => {
                    return (
                      <NavLink
                        key={i}
                        onClick={() => handleClose(0)}
                        to={`/${e.link}`}
                      >
                        <MenuItem
                          sx={{
                            color: "var(--Dark, #16205f)",
                            fontWeight: 500,
                            fontFamily: "Poppins",
                            fontSize: "16px",
                            borderRadius: "2px 0 0 2px",
                            borderLeft: "4px solid transparent",
                            mt: 0.5,
                            mb: 0.5,
                            "&:hover": {
                              borderLeft: "4px solid #fcb81f",
                            },
                          }}
                        >
                          {e.name}
                        </MenuItem>
                      </NavLink>
                    );
                  })}
                </Menu>
              </div>
            </li>

            {/* Technologies Route */}
            <li>
              <NavLink to="/technologies" className="navLink">
                Technologies
              </NavLink>
              {/* Dropdown Menu */}
              <div>
                <KeyboardArrowDownOutlinedIcon
                  id="basic-button"
                  aria-controls={anchorEl[1] ? "basic-menu" : undefined}
                  aria-haspopup="true"
                  aria-expanded={anchorEl[1] ? "true" : undefined}
                  onClick={(event) => handleClick(event, 1)}
                  sx={{
                    width: 24,
                    height: 24,
                    transform: Boolean(anchorEl[1])
                      ? "rotate(180deg)"
                      : "rotate(0deg)",
                  }}
                />
                <Menu
                  id="basic-menu"
                  anchorEl={anchorEl[1]}
                  open={Boolean(anchorEl[1])}
                  onClose={() => handleClose(1)}
                  MenuListProps={{
                    "aria-labelledby": "basic-button",
                  }}
                  PaperProps={{
                    elevation: 0,
                    sx: {
                      overflow: "visible",
                      filter: "drop-shadow(0px 1px 2px rgba(0,0,0,0.32))",
                      mt: 1.5,
                      "& .MuiAvatar-root": {
                        width: 32,
                        height: 32,
                        ml: -0.5,
                        mr: 1,
                      },
                      "&::before": {
                        content: '""',
                        display: "block",
                        position: "absolute",
                        top: 0,
                        right: 6,
                        width: 10,
                        height: 10,
                        bgcolor: "background.paper",
                        transform: "translateY(-50%) rotate(45deg)",
                        zIndex: 0,
                      },
                    },
                  }}
                  transformOrigin={{ horizontal: "right", vertical: "top" }}
                  anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
                >
                  {navTechnologyPages.map((e, i) => {
                    return (
                      <NavLink
                        key={i}
                        onClick={() => handleClose(0)}
                        to={`/${e.link}`}
                      >
                        <MenuItem
                          sx={{
                            color: "var(--Dark, #16205f)",
                            fontWeight: 500,
                            fontFamily: "Poppins",
                            fontSize: "16px",
                            borderRadius: "2px 0 0 2px",
                            borderLeft: "4px solid transparent",
                            mt: 0.5,
                            mb: 0.5,
                            "&:hover": {
                              borderLeft: "4px solid #fcb81f",
                            },
                          }}
                        >
                          {e.name}
                        </MenuItem>
                      </NavLink>
                    );
                  })}
                </Menu>
              </div>
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
