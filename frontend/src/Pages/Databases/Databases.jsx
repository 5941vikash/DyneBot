import React from "react";

// Services Drop Main Root Page Component
import ServicesDropPages from "../ServicesDropPages/ServicesDropPages";

// Image
// import mobileappImg from "./Assets/mobileappImg.jpg";

// Back Image
// import mobileappbackImg from "./Assets/mobileappback.avif";

// Web Pages
import { webDevServices, webDevAgency, webDevTechStack } from "./Database";

const Databases = () => {
  const firstContainer = {
    heading: "End-to-End Database Solutions",
    para: "Web Duality delivers extensive database management and integration services, constructing robust database solutions tailored for web and mobile applications. Our proficient team specializes in expert database management for both mobile and web app development.",
    // backimg: mobileappbackImg,
  };

  const secondContainer = {
    heading:
      "Versatile Database Management Solutions Across Multiple Platforms",
    para1:
      "Our team comprises highly skilled experts in database management, proficient in a range of technologies such as MySQL, MS SQL, PostgreSQL, MongoDB, Amazon DynamoDB, Azure CosmosDB, Indexed Database API, and Google Firebase.",
    para2:
      "In conjunction with these technologies, our team employs cutting-edge database engineering techniques to streamline database management and integrate scalable solutions for your digital platform. We extend our support to startups, enterprises, and established businesses, ensuring a seamless integration of databases and cloud services for enhanced and efficient data analysis.",
    // img: mobileappImg,
  };

  const thirdContainer = {
    heading:
      "Comprehensive Database Management and Integration Solutions",
    para: "As a holistic provider of database solutions, we present a variety of services to our global clientele. This flexibility empowers businesses to select services aligned with their individual business objectives.",
    webDevServices,
  };

  const fourthContainer = {
    heading:
      "<strong>Versatile Mobile App Development</strong> Solutions for Every Sector",
    para: "With our mobile app development expertise, we ensure a seamless digital transition for businesses across different sectors. Web Duality has partnered with businesses of all sizes, crafting bespoke apps that align with specific industry goals.",
    webDevAgency,
  };

  const fifthContainer = {
    heading:
      "Expertise in Database Technologies",
    para: "Web Duality excels in a broad spectrum of database technologies tailored to diverse business needs. Our database consultants, in alignment with your project requirements, guide you in selecting the most suitable database technology for constructing a scalable digital solution.",
    webDevTechStack,
  };

  const hire = "Hire for <strong>Databases</strong>";

  return (
    <>
      <ServicesDropPages
        firstContainer={firstContainer}
        secondContainer={secondContainer}
        thirdContainer={thirdContainer}
        fourthContainer={fourthContainer}
        fifthContainer={fifthContainer}
        hire={hire}
      />
    </>
  );
};

export default Databases;
