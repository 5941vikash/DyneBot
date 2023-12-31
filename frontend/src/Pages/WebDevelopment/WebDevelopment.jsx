// React & UseState & UseEffect
import React, { useState, useEffect } from "react";
// Web Dev CSS
import "./WebDevelopment.css";

/* ------------- React Router Dom ------------- */
// NavLink
import { NavLink } from "react-router-dom";

// Image
import webdevImg from "./Assets/webdevImg.jpg";

// Web Pages
import { webDevServices, webDevAgency, webDevTechStack } from "./WebDev";

// Hire Component
import Hire from "../Hire/Hire";

// React Slick Slider
import Slider from "react-slick";
// React Slick Slider CSS
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const WebDevelopment = (props) => {
  const [animationsShown, setAnimationsShown] = useState({});

  // Handle Intersection Func
  const handleIntersection = (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting && !entry.target.classList.contains("show")) {
        entry.target.classList.add("show");

        // Update the state to mark this animation as shown
        setAnimationsShown((prev) => ({
          ...prev,
          [entry.target.dataset.animationKey]: true,
        }));
      }
    });
  };

  useEffect(() => {
    const observer = new IntersectionObserver(handleIntersection, {
      threshold: 0.5,
    });

    const targetRefs = document.querySelectorAll(".hidden");

    targetRefs.forEach((targetRef) => {
      const animationKey = targetRef.dataset.animationKey;

      // Check if the animation for this box has already been shown
      if (!animationsShown[animationKey]) {
        observer.observe(targetRef);
      } else {
        // If the animation has already been shown, add the 'show' class immediately
        targetRef.classList.add("show");
      }
    });

    return () => {
      targetRefs.forEach((targetRef) => {
        observer.unobserve(targetRef);
      });
    };
  }, [animationsShown]); // Add animationsShown to the dependency array

  // Slider Responsive
  const settings = {
    dots: true,
    infinite: false,
    prevArrow: false,
    nextArrow: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 2,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 750,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };

  // Tech Box List
  const agencyList = webDevAgency.map((e, i) => (
    <div
      className="agencyBox hidden"
      data-animation-key={`fourthWebCont${i}`}
      key={i}
    >
      <div className="innerAgencyBox">
        <img src={e.img} alt="" draggable="false" />
        <h6>{e.name}</h6>
      </div>
    </div>
  ));

  // Hire Dialog UseState
  const [openHireDialog, setOpenHireDialog] = useState(false);

  // Open Hire Dialog Func
  const handleHireOpenDialog = () => {
    setOpenHireDialog(true);
  };

  // Close Hire Dialog Func
  const handleHireCloseDialog = () => {
    setOpenHireDialog(false);
  };

  return (
    <>
      <div className="webDevContainer">
        <div className="firstWebCont">
          <h2>Web Development</h2>
          <p>
            We take pride in being a well-established web development agency
            equipped with a team of proficient web developers. Our focus is on
            crafting top-notch, customized web solutions that align seamlessly
            with our clients' unique business goals, while staying abreast of
            the latest industry benchmarks. This commitment ensures enhanced
            user interaction and satisfaction. Whether it's a sleek single-page
            website or a comprehensive ecommerce platform, our skilled web
            developers specialize in creating adapt.
          </p>

          <div className="buttonBox">
            <NavLink to="/contact">
              {" "}
              <button>Contact Us</button>
            </NavLink>

            <button onClick={handleHireOpenDialog}>Hire Now</button>
          </div>
        </div>

        <div className="secondWebCont">
          <div
            className="leftCount hidden"
            data-animation-key={`secondWebContLeftCont 1`}
          >
            <h2>
              Crafting Tailored <strong>Web Development Solutions</strong> to
              Strengthen Your Online Presence
            </h2>
            <p>
              Web Duality pioneers cutting-edge technology for vibrant,
              adaptable websites. Our diverse team collaborates seamlessly,
              focusing on optimal practices to simplify technical complexities
              and foster enduring client relationships.
            </p>
            <p>
              As a seasoned web development entity, we elevate startups and
              enterprises through compelling websites and applications. Our
              expertise extends to dynamic solutions like PWAs, user-centric
              apps, and streamlined SPAs.
            </p>
          </div>
          <div
            className="rightCount hidden"
            data-animation-key={`secondWebContLeftCont 2`}
          >
            <img src={webdevImg} alt="" draggable="false" />
          </div>
        </div>

        <div className="thirdWebCont">
          <h2>
            <strong>Tailored Web Development Solutions</strong> for Startups,
            SMEs, and Large Enterprises.
          </h2>
          <p>
            We recognize that every business harbors distinct aspirations for
            its online presence. Hence, we've formulated comprehensive web
            development services to address diverse client needs and assist
            businesses in introducing unique web solutions.
          </p>
          <div className="cardBox">
            {webDevServices.map((e, i) => {
              return (
                <div
                  className="cards hidden"
                  data-animation-key={`thirdWebCont ${i}`}
                  key={i}
                >
                  <img src={e.img} alt="" />
                  <div className="down">
                    <h5>{e.name}</h5>
                  </div>
                  <div className="text">
                    <p>{e.text}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="fourthWebCont">
          <h2>
            Collaborate with a <strong>Leading Web Development</strong> Agency
            to Fast-track Your Digital Expansion
          </h2>
          <p>
            Web Duality is committed to delivering customized web solutions for
            diverse industries, including education, healthcare, hospitality,
            food & beverage, and more. Instead of employing a one-size-fits-all
            strategy, we meticulously assess individual business goals and craft
            a personalized development roadmap accordingly.
          </p>
          <div className="box">
            <Slider {...settings}>{agencyList}</Slider>
          </div>
        </div>

        <div className="fifthWebCont">
          <h2>
            <strong>Tools and Frameworks Empowering</strong> Our Dynamic Web
            Solutions
          </h2>
          <p>
            We build dynamic web solutions with a powerful stack: Node.js/Django
            for servers, React/Angular for interfaces, and MongoDB/MySQL for
            databases. Our approach includes Docker for containerization, CI/CD
            for automation, and strong security measures like SSL/TLS and
            firewalls, ensuring top-notch performance, scalability, and security
            in modern web applications.
          </p>
          <div className="box">
            {webDevTechStack.map((e, i) => {
              return (
                <NavLink
                  key={i}
                  to="/"
                  className="inBox hidden"
                  data-animation-key={`fifthWebCont ${i}`}
                >
                  <img src={e.img} alt="" />
                  <h6>{e.heading}</h6>
                </NavLink>
              );
            })}
          </div>
        </div>
      </div>

      {/* Hire Dialog Box */}
      <Hire
        openHireDialog={openHireDialog}
        handleHireCloseDialog={handleHireCloseDialog}
      />
    </>
  );
};

export default WebDevelopment;
