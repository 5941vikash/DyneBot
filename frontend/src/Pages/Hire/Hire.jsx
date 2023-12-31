// React,UseState,UseEffect
import React, { useState } from "react";
// Hire CSS
import "./Hire.css";

/* ------------------- MUI Component ------------------- */
// Dialog
import Dialog from "@mui/material/Dialog";
// Dialog Content
import DialogContent from "@mui/material/DialogContent";
import Button from "@mui/material/Button";
import { Box } from "@mui/material";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";

/* ------------- MUI Icons ------------- */
// Person Icon
import PersonIcon from "@mui/icons-material/Person";
// Email Icon
import EmailIcon from "@mui/icons-material/Email";
// Phone Icon
import PhoneIcon from "@mui/icons-material/Phone";

import axios from "axios";

/* ------------- Alerts ------------- */
// Snack Bar
import Snackbar from "@mui/material/Snackbar";
// Alert
import MuiAlert from "@mui/material/Alert";

const Hire = (props) => {
  // Props
  const { openHireDialog, handleHireCloseDialog } = props;

  // hire UseState
  const [hire, setHire] = useState({
    fullname: "",
    email: "",
    phone: "",
  });

  // Input Alert UseState
  const [alert, setAlert] = useState({
    fullnameAlert: "",
    mailAlert: "",
    phoneAlert: "",
  });

  // Handle hire Change Func
  const handleHireChange = (e) => {
    const { name, value } = e.target;
    setHire({
      ...hire,
      [name]: value,
    });
  };

  // Snackbar Alert UseState
  const [snack, setSnack] = useState({
    open: false,
    message: "",
    severity: "error",
  });

  // Close SnackBar Alert Func
  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setSnack({
      ...snack,
      open: false,
    });
  };

  // Handle Form Submit Func
  const handleHireData = (event) => {
    // Stop Reloading the Page when Submiting the Form
    event.preventDefault();

    // Check if the form is fill or not
    if (
      hire.fullname !== "" &&
      alert.fullnameAlert === "" &&
      hire.email !== "" &&
      alert.mailAlert === "" &&
      hire.phone !== "" &&
      alert.phoneAlert === ""
    ) {
      // Post Request
      axios
        .post(`/api`, hire)
        .then((res) => {
          // Response
        })
        .catch((err) => {
          // Error
        });
    }
    // Else show fill the form
    else {
      setSnack({
        open: true,
        message: "Please fill the form !!",
        severity: "warning",
      });
    }
  };

  return (
    <>
      {/* Hire Dialog Box */}
      <Dialog
        open={openHireDialog}
        onClose={handleHireCloseDialog}
        maxWidth="xl"
      >
        {/* Dialog Content */}
        <DialogContent
          style={{
            width: "100%",
          }}
        >
          <Box
            sx={{
              width: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
              color: "#16205f",
              fontFamily: "Poppins",
            }}
            className="hireMainBox"
          >
            <h2>
              Hire for <strong>Web Development</strong>
            </h2>
            {/* First Name Box */}
            <Box className="hireBox">
              {/* Text Field */}
              <TextField
                label="Full Name"
                color="warning"
                type="text"
                name="fullname"
                value={hire.fullname ? hire.fullname.trim("") : hire.fullname}
                onChange={handleHireChange}
                className="hireInput"
                variant="outlined"
                placeholder="Enter Full Name"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      {/* Person Icon */}
                      <PersonIcon
                        sx={{
                          color: "#16205f",
                          m: 0.5,
                          fontSize: "2rem",
                        }}
                      />
                    </InputAdornment>
                  ),
                }}
                onBlur={() => {
                  if (hire.fullname === "" || /^\s*$/.test(hire.fullname)) {
                    setAlert({
                      ...alert,
                      fullnameAlert: "Please enter fullname !!",
                    });
                  } else {
                    setAlert({
                      ...alert,
                      fullnameAlert: "",
                    });
                  }
                }}
              />
              {/* Show fullname Alert */}
              <p>{alert.fullnameAlert}</p>
            </Box>

            {/* Email Id Box */}
            <Box className="hireBox">
              {/* Text Field */}
              <TextField
                label="Email Id"
                color="warning"
                type="text"
                name="email"
                value={hire.email ? hire.email.trim("") : hire.email}
                onChange={handleHireChange}
                className="hireInput"
                variant="outlined"
                placeholder="Enter Email ID"
                onBlur={() => {
                  if (
                    !/^([a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(
                      hire.email
                    )
                  ) {
                    setAlert({
                      ...alert,
                      mailAlert: "Invalid email address !!",
                    });
                  } else {
                    setAlert({
                      ...alert,
                      mailAlert: "",
                    });
                  }
                }}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      {/* Person Icon */}
                      <EmailIcon
                        sx={{
                          color: "#16205f",
                          m: 0.5,
                          fontSize: "2rem",
                        }}
                      />
                    </InputAdornment>
                  ),
                }}
              />
              {/* Show Email Alert */}
              <p>{alert.mailAlert}</p>
            </Box>

            {/* Phone Box */}
            <Box className="hireBox">
              {/* Text Field */}
              <TextField
                label="Phone No."
                color="warning"
                type="tel"
                name="phone"
                value={hire.phone ? hire.phone.trim("") : hire.phone}
                onChange={handleHireChange}
                className="hireInput"
                variant="outlined"
                placeholder="Enter Phone No."
                onBlur={() => {
                  if (!/^([+]?[0-9]{1,4}[ -]?)?([0-9]{10})$/.test(hire.phone)) {
                    setAlert({
                      ...alert,
                      phoneAlert: "Invalid phone no. !!",
                    });
                  } else {
                    setAlert({
                      ...alert,
                      phoneAlert: "",
                    });
                  }
                }}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      {/* Person Icon */}
                      <PhoneIcon
                        sx={{
                          color: "#16205f",
                          m: 0.5,
                          fontSize: "2rem",
                        }}
                      />
                    </InputAdornment>
                  ),
                }}
              />
              {/* Show Phone Alert */}
              <p>{alert.phoneAlert}</p>
            </Box>

            <div className="btnGrp">
              <Button
                color="success"
                variant="contained"
                onClick={handleHireData}
                sx={{
                  m: 1,
                }}
              >
                Submit
              </Button>
              <Button
                onClick={handleHireCloseDialog}
                color="error"
                variant="outlined"
                sx={{
                  m: 1,
                }}
              >
                Close
              </Button>
            </div>
          </Box>
        </DialogContent>
      </Dialog>

      {/* Snack Bar Alert */}
      <Snackbar
        open={snack.open}
        autoHideDuration={6000}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
      >
        {/* Mui Alert */}
        <MuiAlert
          onClose={handleClose}
          severity={snack.severity}
          sx={{ width: "100%" }}
        >
          <strong>{snack.message}</strong>
        </MuiAlert>
      </Snackbar>
    </>
  );
};

export default Hire;
