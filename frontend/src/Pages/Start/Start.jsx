import React from "react";
import "./Start.css";

import { firstStartBox, secondStartBox } from "./StartBox";

import SliderBox from "../Home/SliderBox";

const Start = () => {
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
                <div className="inBox" key={i}>
                  <img src={e.img} alt="" draggable="false" />
                  <span>
                    <p>{e.heading}</p>
                    <p>{e.para}</p>
                  </span>
                </div>
              );
            })}
          </div>

          <SliderBox boxes={firstStartBox} />
        </div>

        <div className="thirdStartCont">
          <h3>Why You Need To Hire Remote Developers</h3>

          <div className="box">
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
