import React from 'react'

// Services Drop Main Root Page Component
import TechnologyDrop from "../../../Components/TechnologyDrop/TechnologyDrop";

// Image
// import angularImg from "./Assets/angularImg.webp";

// Back Image
// import angularbackImg from "./Assets/angularBack.png";

// Web Pages
import { webDevServices, webDevAgency, webDevTechStack } from "./MAUITech";

const MAUI = () => {
  const firstContainer = {
    heading: ".NET MAUI Development",
    para: "Optimize your digital presence with Web Duality's skilled .NET MAUI developers. Launch dynamic cross-platform applications efficiently, engaging users on desktop, iOS, and Android. Benefit from cost-effective solutions and a single shared codebase for a streamlined and impactful digital experience.",
    // backimg: angularbackImg,
  };

  const secondContainer = {
    heading: "Exploring <strong>.NET MAUI </strong>.",
    para1:
      "Exploring Microsoft .NET MAUI, a cross-platform open-source framework tailored by Web Duality. It empowers developers to create feature-packed applications for desktop and mobile platforms using a unified codebase. Utilizing C# and XAML as primary languages, the framework facilitates the development of native apps for iOS, Android, Windows, and macOS.",
    para2:
      ".NET MAUI's unique approach, leveraging a single codebase for multiple platforms, allows cost-effective deployment of high-performance applications. This not only benefits businesses but also accelerates time-to-market for developers, irrespective of project complexity. Ideal for startups and small businesses with constrained budgets, .NET MAUI's multi-platform support also caters to enterprise-level needs, delivering performance-driven desktop and native mobile apps for various platforms.",
    // img: angularImg,
  };

  const thirdContainer = {
    heading: " <strong> Web Duality's .NET MAUI Development Services </strong>: Empowering Startups, Scale-Ups, and Large Enterprises.",
    para: "Web Duality excels in .NET MAUI development, serving startups to enterprises. Our services span native Android/iOS apps to full-scale desktop applications, employing tailored strategies for diverse business needs.",
    webDevServices,
  };

  const fourthContainer = {
    heading:
      "<strong> Advantages of Opting for .NET MAUI </strong> in Cross-Platform App Development.",
    para: "As a cutting-edge cross-platform development framework, .NET MAUI provides numerous benefits. With advanced functionalities, it's ideal for constructing complex, high-performance, and scalable solutions across various platforms. Ten key benefits include:",
    webDevAgency,
  };

  const fifthContainer = {
    heading: "<strong>.NET MAUI Development </strong> Technology Stack",
    para: ".NET MAUI development employs XAML for frontend UI design and C# for server-side logic within the .NET MAUI framework. It integrates seamlessly with Azure for scalable applications. The stack includes",
    webDevTechStack,
  };

  const hire = "Hire for <strong>Angular</strong>";

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

export default MAUI
