import React from "react";

// Services Drop Main Root Page Component
import ServicesDropPages from "../ServicesDropPages/ServicesDropPages";

// Image
import uiuxImg from "./Assets/uiuxImg.avif";

// Back Image
import uiuxbackImg from "./Assets/uiuxbackImg.jpg";

// Web Pages
import { webDevServices, webDevAgency, webDevTechStack } from "./UIUX";

const UIUXDesign = () => {
  const firstContainer = {
    heading: "UI UX Design",
    para: "At Web Duality, we love creating websites and mobile apps that make things easy and enjoyable for you. We believe a great design isn't just about looking good but also about being easy to use. Our team of designers and developers works together to make sure your digital experience is smooth, user-friendly, and something you'll love using.",
    backimg: uiuxbackImg,
  };

  const secondContainer = {
    heading:
      "Elevating Digital Impact with <strong>Custom Web Solutions</strong> for a Strong Online Presence.",
    para1:
      "Web Duality pioneers cutting-edge technology to craft vibrant and adaptable websites with a focus on optimal user experiences. Our diverse team collaborates seamlessly, simplifying technical complexities to elevate UI/UX and foster enduring client relationships.",
    para2:
      "As a leading force in web development, we excel in elevating startups and enterprises through the creation of captivating websites and applications that prioritize an outstanding UI/UX. Our proficiency extends to crafting dynamic solutions.",
    img: uiuxImg,
  };

  const thirdContainer = {
    heading:
      "<strong>Strategic Creativity</strong> in Planning, Design, and Implementation",
    para: "Our Comprehensive Creative Strategy Design and Development offering encompasses a variety of services designed to formulate a digital strategy tailored to your business, ensuring alignment with your overarching goals and objectives.",
    webDevServices,
  };

  const fourthContainer = {
    heading:
      "Collaborate with a <strong>Leading Web Development</strong> Agency to Fast-track Your Digital Expansion",
    para: "Web Duality is committed to delivering customized web solutions for diverse industries, including education, healthcare, hospitality, food & beverage, and more. Instead of employing a one-size-fits-all strategy, we meticulously assess individual business goals and craft a personalized development roadmap accordingly.",
    webDevAgency,
  };

  const fifthContainer = {
    heading:
      "<strong>Tools and Frameworks Empowering</strong> Our Dynamic Web Solutions",
    para: "We build dynamic web solutions with a powerful stack: Node.js/Django for servers, React/Angular for interfaces, and MongoDB/MySQL for databases. Our approach includes Docker for containerization, CI/CD for automation, and strong security measures like SSL/TLS and firewalls, ensuring top-notch performance, scalability, and security in modern web applications.",
    webDevTechStack,
  };

  const hire = "Hire for <strong>UI UX Design</strong>";

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

export default UIUXDesign;
