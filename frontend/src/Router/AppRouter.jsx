import React from "react";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "../Components/Navbar/Navbar";

const AppRouter = () => {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>{/* <Route/> */}</Routes>
      </Router>
    </>
  );
};

export default AppRouter;
