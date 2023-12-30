// React & UseState & UseEffect
import React, { useState, useEffect } from "react";
import "./WebDevelopment.css";

import { NavLink } from "react-router-dom";

import webdevImg from "./Assets/webdevImg.jpg";

import { webDevServices, webDevAgency } from "./WebDev";

// React Slick Slider
import Slider from "react-slick";
// React Slick Slider CSS
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const WebDevelopment = () => {
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

            <button>Hire Now</button>
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
                  <div className="overlay"></div>
                  <h5>{e.name}</h5>
                  <p>{e.text}</p>
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
      </div>
    </>
  );
};

export default WebDevelopment;
