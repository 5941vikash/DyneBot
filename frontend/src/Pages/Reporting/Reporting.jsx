import React from "react";

// Services Drop Main Root Page Component
import ServicesDropPages from "../ServicesDropPages/ServicesDropPages";

// Image
// import mobileappImg from "./Assets/mobileappImg.jpg";

// Back Image
// import mobileappbackImg from "./Assets/mobileappback.avif";

// Web Pages
import { webDevServices, webDevAgency, webDevTechStack } from "./Report";
const Reporting = () => {
  const firstContainer = {
    heading: "Advanced Project Analysis through Comprehensive Reporting",
    para: "Web Duality delivers exceptional project reporting services worldwide, empowering businesses to assess the real-time status of their projects and utilize analytics for informed decision-making. Leveraging cutting-edge reporting and analytic tools, our team facilitates businesses in visualizing and crafting detailed reports for enhanced project insights.",
    // backimg: mobileappbackImg,
  };

  const secondContainer = {
    heading:
      "Driving Business Growth Through Data Visualization Mastery",
    para1:
      "As a prominent digital solutions provider, we recognize the pivotal role of data visualization in propelling contemporary businesses forward. Our comprehensive data visualization and reporting services are designed to catalyze revenue growth, attract high-quality leads, and facilitate informed marketing decisions.",
    para2:
      "Our team of seasoned data analytics professionals specializes in utilizing a diverse set of reporting and data analytics tools, including PowerBI, Tableau, and Bold Reports. We acknowledge the critical importance of accurate and timely project reporting for effective decision-making. Therefore, our tailored services ensure that clients have access to the essential information required for making well-informed, data-driven decisions.",
    // img: mobileappImg,
  };

  const thirdContainer = {
    heading:
      "Fuel Your Business Expansion with Our Advanced Reporting Solutions",
    para: "As a comprehensive reporting development firm, we provide a spectrum of customized services to fulfill diverse business objectives. Our committed team delivers comprehensive support, leading you from conceptualization to a seamless market presence with an exceptional reporting solution.",
    webDevServices,
  };

  const fourthContainer = {
    heading:
      "Versatile Reporting and Analytics Across Industries",
    para: "We provide tailored reporting and analytics services suitable for businesses in various industries. Leveraging detailed data visualization, we empower global enterprises to enhance their brand presence, make informed marketing and financial decisions, and foster strategic business growth.",
    webDevAgency,
  };

  const fifthContainer = {
    heading:
      "Utilized Reporting Technologies",
    para: "Collaborating with Web Duality for your reporting and data analysis needs grants your brand access to specialists proficient in contemporary reporting tools. Our team harnesses these technologies to craft tailored, visually engaging reports that align with and foster your business expansion.",
    webDevTechStack,
  };

  const hire = "Hire for <strong>Reporting</strong>";

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

export default Reporting;
