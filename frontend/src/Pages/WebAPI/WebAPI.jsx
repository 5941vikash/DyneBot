import React from "react";

// Services Drop Main Root Page Component
import ServicesDropPages from "../ServicesDropPages/ServicesDropPages";

// Image
// import mobileappImg from "./Assets/mobileappImg.jpg";

// Back Image
// import mobileappbackImg from "./Assets/mobileappback.avif";

// Web Pages
import { webDevServices, webDevAgency, webDevTechStack } from "./Web";
const WebAPI = () => {
  const firstContainer = {
    heading: "Web Duality's Expertise in ASP.NET Core API Development & Integration Solutions",
    para: "At Web Duality, we specialize in ASP.NET Core Web API development, crafting tailored solutions for diverse industries. Our experienced team ensures seamless integration with existing systems, meeting each client's unique requirements.",
    // backimg: mobileappbackImg,
  };

  const secondContainer = {
    heading:
      "Tailored Web API Solutions Across Industries",
    para1:
      "In today's digital era, Web APIs play a pivotal role in facilitating seamless communication between various applications and platforms. Businesses, regardless of their size, can leverage the power of Web API development to enhance connectivity and streamline processes.",
    para2:
    "At Web Duality, we lead the way in providing tailored Web API solutions, catering to the unique requirements of diverse industries. Our expertise extends to crafting robust APIs for effective communication and integration, fostering digital transformation for businesses seeking enhanced connectivity and efficiency.",
    // img: mobileappImg,
  };

  const thirdContainer = {
    heading:
      "Partner with Us for Outsourcing",
    para: "Choose Web Duality as your outsourcing destination for comprehensive Web API development solutions. Explore the advantages we provide for your project, including.",
    webDevServices,
  };

  const fourthContainer = {
    heading:
      "Advantages of ASP.NET Core Web API Development",
    para: "Explore the numerous advantages offered by ASP.NET Core Web API Development.",
    webDevAgency,
  };

  const fifthContainer = {
    heading:
      "Tools and Technologies for ASP.NET Core API Development",
    para: "Web Duality employs a variety of cutting-edge tools and technologies to craft high-performing ASP.NET Core Web APIs.",
    webDevTechStack,
  };

  const hire = "Hire for <strong>Web API</strong>";

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

export default WebAPI;
