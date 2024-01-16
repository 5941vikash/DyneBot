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
import WebDevelopment from "../Pages/WebDevelopment/WebDevelopment";
import UIUXDesign from "../Pages/UIUXDesign/UIUXDesign";
import CloudServices from "../Pages/CloudServices/CloudServices";
import PWADevelopment from "../Pages/PWADevelopment/PWADevelopment";
import MobileAppDevelopment from "../Pages/MobileAppDevelopment/MobileAppDevelopment";
import ProductDevelopment from "../Pages/ProductDevelopment/ProductDevelopment";
import SoftwareTesting from "../Pages/SoftwareTesting/SoftwareTesting";
import WebAPI from "../Pages/WebAPI/WebAPI";
import Databases from "../Pages/Databases/Databases";
import Reporting from "../Pages/Reporting/Reporting";

/* ----------------Technology---------------- */
import Angularpage from "../Pages/Technology/Angularpage";
import Blazorpage from "../Pages/Technology/Blazorpage";
import Cpage from "../Pages/Technology/Cpage";
import MAUIpage from "../Pages/Technology/MAUIpage";
import MERNpage from "../Pages/Technology/MERNpage";
import Microservicepage from "../Pages/Technology/Microservicepage";
import Netpage from "../Pages/Technology/Netpage";
import Nodepage from "../Pages/Technology/Nodepage";
import Reactpage from "../Pages/Technology/Reactpage";
import Typescriptpage from "../Pages/Technology/Typescriptpage";
import Vuepage from "../Pages/Technology/Vuepage";

const AppRouter = () => {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/start" element={<Start />} />
          <Route exact path="/services" element={<Services />} />

          <Route exact path="/web-development" element={<WebDevelopment />} />
          <Route exact path="/uiux-design" element={<UIUXDesign />} />
          <Route exact path="/cloud-services" element={<CloudServices />} />
          <Route exact path="/pwa-development" element={<PWADevelopment />} />
          <Route
            exact
            path="/mobile-app-development"
            element={<MobileAppDevelopment />}
          />
          <Route
            exact
            path="/product-development"
            element={<ProductDevelopment />}
          />
          <Route exact path="/software-testing" element={<SoftwareTesting />} />
          <Route exact path="/web-api" element={<WebAPI />} />
          <Route exact path="/databases" element={<Databases />} />
          <Route exact path="/reporting" element={<Reporting />} />

          <Route exact path="/technologies" element={<Technology />} />
          <Route exact path="/careers" element={<Careers />} />
          <Route exact path="/contact" element={<Contact />} />

          {/********************Technology *********/}
          <Route exact path="/dot-net" element={<Netpage />} />
          <Route exact path="/react" element={<Reactpage />} />
          <Route exact path="/angular" element={<Angularpage />} />
          <Route exact path="/vue" element={<Vuepage />} />
          <Route exact path="/c" element={<Cpage />} />
          <Route exact path="/blazor" element={<Blazorpage />} />
          <Route exact path="/mern" element={<MERNpage />} />
          <Route exact path="/microservice" element={<Microservicepage />} />
          <Route exact path="/node" element={<Nodepage />} />
          <Route exact path="/maui" element={<MAUIpage />} />
          <Route exact path="/typescript" element={<Typescriptpage />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
};

export default AppRouter;
