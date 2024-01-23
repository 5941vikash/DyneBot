import React from 'react'

// Services Drop Main Root Page Component
import TechnologyDrop from "../../../Components/TechnologyDrop/TechnologyDrop";

// Image
// import angularImg from "./Assets/angularImg.webp";

// Back Image
// import angularbackImg from "./Assets/angularBack.png";

// Web Pages
import { webDevServices, webDevAgency, webDevTechStack } from "./DotNetTech";

const DotNet = () => {
  const firstContainer = {
    heading: ".NET Development",
    para: "As a leading .NET software development firm, we boast a team of industry experts dedicated to crafting high-performance .NET applications for a global clientele. Our systematic and proven development approach ensures businesses can swiftly introduce dynamic software solutions, reducing time-to-market.",
    // backimg: angularbackImg,
  };

  const secondContainer = {
    heading: "our Ultimate Destination for Varied <strong>.NET  Development Services </strong>.",
    para1:
      "Web Duality Technologies recognizes that .NET stands as one of the foremost frameworks, primarily employed for crafting robust, mission-centric, and high-performance software solutions that align with diverse business objectives. Offering a myriad of .NET development services, coupled with a personalized development approach, we empower business owners to enter the market with feature-rich and fully operational software, simplifying intricate business operations..",
    para2:
      "Our adept team specializes in designing enterprise-level web, desktop, and mobile applications catering to various industries. Leveraging cutting-edge .NET development technologies such as .NET 7, .NET Core, MVC, Blazor, and MAUI, we assist businesses in navigating the landscape of digital transformation in today's technology-driven world..",
    // img: angularImg,
  };

  const thirdContainer = {
    heading: "Exploring <strong> Web Duality's .NET Software Development </strong> Services",
    para: "As a prominent .NET software development company, Web Duality provides comprehensive end-to-end .NET development services tailored to diverse client objectives. Our offerings encompass a wide spectrum of solutions, ensuring that businesses receive the full benefit of our expertise and commitment to delivering high-quality software solutions.",
    webDevServices,
  };

  const fourthContainer = {
    heading:
      "Why Choose <strong> Web Duality as Your .NET Development </strong> Partner",
    para: "Web Duality excels in innovation! Our seasoned .NET developers, adhering to market standards, leverage expertise to create high-performance web, desktop, and mobile applications. With a proven development approach, we empower businesses for rapid time-to-market, delivering top-quality .NET solutions.",
    webDevAgency,
  };

  const fifthContainer = {
    heading: "Tailoring .NET Solutions Across Industries",
    para: "As a renowned .NET development company, Web Duality specializes in delivering personalized .NET web and mobile development solutions tailored to your business needs. Our team of .NET developers has collaborated with startups and established enterprises across various industries, ensuring bespoke solutions.",
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

export default DotNet