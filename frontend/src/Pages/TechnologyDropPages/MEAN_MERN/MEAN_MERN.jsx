import React from 'react'

// Services Drop Main Root Page Component
import TechnologyDrop from "../../../Components/TechnologyDrop/TechnologyDrop";

// Image
// import dotnetImg from "./Assets/dotnetImg.png";

// Back Image
// import dotnetbackImg from "./Assets/dotnetbackImg.jpg";

// Web Pages
import { webDevServices, webDevAgency, webDevTechStack } from "./MEAN_MERNTech";

const MEAN_MERN = () => {
  const firstContainer = {
    heading: "MEAN & MERN Full-Stack Development",
    para: "Welcome to Web Duality, a leading MEAN and MERN Full-Stack Development Service provider in India. Specializing in cutting-edge solutions, we empower businesses to enhance their digital presence and drive growth through MEAN and MERN Stack Development Services.",
    // backimg: dotnetbackImg,
  };

  const secondContainer = {
    heading:
      "The primary <strong> distinction between MEAN and MERN </strong>",
    para1:
      "MEAN stack is a technology stack consisting of MongoDB, Express, Angular, and Node.js. Each technology serves a specific purpose, and together they create a full-stack solution for building modern web applications. MongoDB is a NoSQL database that uses JSON-like documents to store data. Express is a flexible and minimalist web application framework for Node.js. Angular is a front-end JavaScript framework used for building dynamic and interactive web applications. Node.js is a server-side JavaScript runtime that executes JavaScript code outside of a web browser.",
    para2:
      "MERN stack is another popular technology stack consisting of MongoDB, Express, React, and Node.js. While MERN and MEAN share some similarities, MERN has some key differences that make it better suited for certain types of applications. React is a popular front-end JavaScript library used for building dynamic user interfaces. React is component-based and allows developers to build reusable UI components. This makes it easier to build complex user interfaces that can be reused across multiple applications.",
    // img: dotnetImg,
  };

  const thirdContainer = {
    heading:
      "<strong> MEAN & MERN </strong> Stack Development Solutions",
    para: "Explore our comprehensive range of MEAN & MERN Stack Development Solutions tailored to diverse industry needs. Our offerings comprise.",
    webDevServices,
  };

  const fourthContainer = {
    heading:
      "Benefits of Using MEAN & MERN Stack Framework",
    para: "Web Duality excels in innovation! Our seasoned .NET developers, adhering to market standards, leverage expertise to create high-performance web, desktop, and mobile applications. With a proven development approach, we empower businesses for rapid time-to-market, delivering top-quality .NET solutions.",
    webDevAgency,
  };

  const fifthContainer = {
    heading: "Choosing Between <strong> MEAN and MERN Stack </strong> for Development",
    para: "MEAN and MERN stand out as leading full-stack development technologies globally. While both are potent and efficient, key distinctions exist, influencing the choice between them for your specific needs.",
    webDevTechStack,
  };

  const hire = "Hire for <strong>MEAN & MERN</strong>";

  return (
    <>
      <TechnologyDrop
        firstContainer={firstContainer}
        secondContainer={secondContainer}
        thirdContainer={thirdContainer}
        fourthContainer={fourthContainer}
        fifthContainer={fifthContainer}
        hire={hire}
      />
    </>
  );
}

export default MEAN_MERN
