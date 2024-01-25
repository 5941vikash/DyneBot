import React from 'react'

// Services Drop Main Root Page Component
import TechnologyDrop from "../../../Components/TechnologyDrop/TechnologyDrop";

// Image
// import dotnetImg from "./Assets/dotnetImg.png";

// Back Image
// import dotnetbackImg from "./Assets/dotnetbackImg.jpg";

// Web Pages
import { webDevServices, webDevAgency, webDevTechStack } from "./NodeTech";

const Node = () => {
  const firstContainer = {
    heading: "NodeJS Development",
    para: "As a dedicated Node.js development partner, we specialize in creating high-performance web solutions, encompassing PWAs, intricate web applications, chatbots, and more, tailored to meet our clients' unique business needs. Our adept developers harness the power of Node.js to facilitate the deployment of serverless cloud-based web solutions, ensuring a cutting-edge user experience.",
    // backimg: dotnetbackImg,
  };

  const secondContainer = {
    heading:
      "Embark on Digital Evolution Through Tailored <strong> Node.js </strong> Development Solutions",
    para1:
      "In today's technology-driven business landscape, organizations demand digital solutions capable of efficiently handling vast data volumes in real-time while ensuring a seamless user experience. Node.js has emerged as a leading web development technology, utilizing event-driven data models to construct robust multi-user architectures for modern web solutions.",
    para2:
      "Web Duality offers expert Node.js development services, empowering businesses, whether startups or enterprises, to harness the advantages of Node.js' rich ecosystem for launching high-performance web solutions. Our team of skilled Node.js developers leverages the runtime environment to create scalable web applications aligned with clients' business objectives. Additionally, we specialize in Node.js application migration, ensuring existing applications benefit from the latest features and functionalities, enabling clients to maintain a competitive edge in the digital landscape.",
    // img: dotnetImg,
  };

  const thirdContainer = {
    heading:
      "Personalized <strong> NodeJS Development </strong> Services for Startups, Small Businesses, and Large Enterprises",
    para: "As a leading force in NodeJS web development, we lead the way in delivering top-notch NodeJS development services spanning various industries. Our services are customized to assist businesses in elevating and expanding their operations for optimal productivity. Here's a brief overview of our NodeJS development services.",
    webDevServices,
  };

  const fourthContainer = {
    heading:
      "Innovate, Develop, and Expand Your Web Presence with <strong> NodeJS </strong> Development",
    para: "As a comprehensive NodeJS development company, we offer end-to-end solutions for creating dynamic, data-intensive, and scalable web applications to optimize business processes. Explore the inherent advantages of NodeJS as a web development platform.",
    webDevAgency,
  };

  const fifthContainer = {
    heading: "Customizing <strong>Node.js </strong> Solutions Across Industries",
    para: "As a reputable Node.js development company, Web Duality excels in providing bespoke Node.js web and mobile development solutions crafted to meet your business requirements. Our team of Node.js developers has partnered with startups and established enterprises across diverse industries, ensuring tailored solutions.",
    webDevTechStack,
  };

  const hire = "Hire for <strong>Node.js</strong>";

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

export default Node
