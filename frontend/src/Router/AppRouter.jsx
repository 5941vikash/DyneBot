// React
import React from "react";

/* ------------- React Router Dom ------------- */
// Router,Route,Routes
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

/* ------------- Components ------------- */
import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";

/* ------------- Pages ------------- */
import Home from "../Pages/Home/Home";
import Start from "../Pages/Start/Start";
import Services from "../Pages/Services/Services";
import Technology from "../Pages/Technology/Technology";
import Careers from "../Pages/Careers/Careers";
import Contact from "../Pages/Contact/Contact";

const AppRouter = () => {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/start" element={<Start />} />
          <Route exact path="/services" element={<Services />} />
          <Route exact path="/technologies" element={<Technology />} />
          <Route exact path="/careers" element={<Careers />} />
          <Route exact path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
};

export default AppRouter;
