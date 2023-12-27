// React
import React, { useState, useEffect } from "react";
// Start CSS
import "./Start.css";

// Boxes
import { firstStartBox, secondStartBox } from "./StartBox";

// Slider Component
import SliderBox from "../Home/SliderBox";

const Start = () => {
  // Handle Intersection Func
  const handleIntersection = (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      } else {
        entry.target.classList.remove("show");
      }
    });
  };

  // UseEffect for Observing Content and set animation
  useEffect(() => {
    const observer = new IntersectionObserver(handleIntersection, {
      threshold: 0.5,
    });

    const targetRefs = document.querySelectorAll(".hidden");

    targetRefs.forEach((targetRef) => {
      observer.observe(targetRef);
    });

    return () => {
      targetRefs.forEach((targetRef) => {
        observer.unobserve(targetRef);
      });
    };
  }, []);

  return (
    <>
      <div className="startPage">
        <div className="firstStartCont">
          <h2>How to Start</h2>
          <p>We specialize in helping you build a team of expert developers.</p>
        </div>

        <div className="secondStartCont">
          <h4>How to Get Started with Courtney</h4>
          <p>
            From full-time remote engineering teams to hourly contractors, work
            with remote devs as needed
          </p>

          <div className="box hide">
            {firstStartBox.map((e, i) => {
              return (
                <div className="inBox hidden" key={i}>
                  <img src={e.img} alt="" draggable="false" />
                  <span>
                    <p>{e.heading}</p>
                    <p>{e.para}</p>
                  </span>
                </div>
              );
            })}
          </div>
          {/* Responsive */}
          <SliderBox boxes={firstStartBox} />
        </div>

        <div className="thirdStartCont">
          <h3>Why You Need To Hire Remote Developers</h3>

          <div className="box hidden">
            {secondStartBox.map((e, i) => {
              return <h6 key={i}>{e.heading}</h6>;
            })}
          </div>
        </div>

        <div className="fourthStartCont">
          <p>1000+</p>
          <p>Developers</p>
        </div>
      </div>
    </>
  );
};

export default Start;
