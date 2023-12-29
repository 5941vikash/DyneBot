// React,UseState,UseEffect
import React, { useState, useEffect } from "react";
// Team CSS
// import "./Hire.css";

/* ------------------- MUI Component ------------------- */
// Dialog
import Dialog from "@mui/material/Dialog";
// Dialog Content
import DialogContent from "@mui/material/DialogContent";

const Hire = (props) => {
  // Props
  const { openHireDialog, handleHireCloseDialog } = props;

  return (
    <>
      {/* Build Team Dialog Box */}
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
        ></DialogContent>
      </Dialog>
    </>
  );
};

export default Hire;
