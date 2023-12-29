import React from "react";
import "./WebDevelopment.css";

import { NavLink } from "react-router-dom";

import webdevImg from "./Assets/webdevImg.jpg";

import { webDevServices } from "./WebDev";

const WebDevelopment = () => {
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
          <div className="leftCount">
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
          <div className="rightCount">
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
                <div className="cards" key={i}>
                    <img src={e.img} alt="" />
                    <div className="overlay"></div>
                    <h5>{e.name}</h5>
                    <p>{e.text}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default WebDevelopment;
