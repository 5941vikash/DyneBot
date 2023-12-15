// React
import React from "react";

/* ------------- React Router Dom ------------- */
// Router,Route,Routes
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

/* ------------- Components ------------- */
// Navbar Component
import Navbar from "../Components/Navbar/Navbar";

const AppRouter = () => {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          {" "}
          {/* Home Route */}
          {/* <Route exact path="/" element={<Home />} /> */}
        </Routes>
      </Router>
    </>
  );
};

export default AppRouter;
