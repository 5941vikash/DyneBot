import React, { useState } from "react";
import "./Home.css";
import backimg from "./Assets/backimg.png";

// Right Arrow Icon
import ArrowForwardOutlinedIcon from "@mui/icons-material/ArrowForwardOutlined";
import Team from "../../Components/Team/Team";

import {
  firstHomeBox,
  secondHomeBox,
  thirdHomeBox,
  fourthHomeBox,
} from "./HomeBox";

const Home = () => {
  // Build Team Dialog UseState
  const [openBuildTeamDialog, setOpenBuildTeamDialog] = useState(false);

  // Open Build Team Dialog Func
  const handleBuildTeamOpenDialog = () => {
    setOpenBuildTeamDialog(true);
  };

  // Close Build Team Dialog Func
  const handleBuildTeamCloseDialog = () => {
    setOpenBuildTeamDialog(false);
  };

  return (
    <>
      <div className="homeContainer">
        <div className="homeFirstCont">
          <div className="box">
            <h2>Building dev team, Quickly and Affordably</h2>
            <p>
              We specialize in helping you build a team of expert developers,
              testers, and leaders. We are setup to deliver long term solutions,
              or scale to different needs quickly.
            </p>
            <button onClick={handleBuildTeamOpenDialog}>
              Build a team
              <ArrowForwardOutlinedIcon
                sx={{
                  width: 18,
                  height: 15.5,
                  ml: 0.5,
                }}
              />
            </button>
          </div>
          <img src={backimg} alt="" />
        </div>

        <div className="homeSecondCont">
          {firstHomeBox.map((e, i) => {
            return (
              <div className="box" key={i}>
                <img src={e.img} alt="" draggable="false" />
                <span>
                  <p>{e.heading}</p>
                  <p>{e.para}</p>
                </span>
              </div>
            );
          })}
        </div>

        <div className="homeThirdCont">
          <h6>How to Start</h6>
          <h2>Easy Process</h2>
          <p>
            We specialize in helping you build a team of expert developers,
            testers, and leaders.
          </p>
          <div className="box">
            {secondHomeBox.map((e, i) => {
              return (
                <div className="inBox" key={i}>
                  <img src={e.img} alt="" draggable="false" />
                  <p>
                    <strong>{e.heading}</strong>
                    {e.para}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        <div className="homeFourthCont">
          <h5>Expertise</h5>
          <h2>Hire Permanent and Remote Developers</h2>
          <p>
            From full-time remote engineering teams to hourly contractors, work
            with remote devs as needed
          </p>

          <div className="box">
            {thirdHomeBox.map((e, i) => {
              return (
                <div className="inBox" key={i}>
                  <img src={e.img} alt="" draggable="false" />
                  <p>{e.heading}</p>
                  <p>{e.para}</p>
                </div>
              );
            })}
          </div>
        </div>

        <div className="homeFifthCont">
          <h5>Specialized</h5>
          <h2>Specialized Staff We Provide</h2>

          <div className="box">
            {fourthHomeBox.map((e, i) => {
              return (
                <div className="inBox" key={i}>
                  <img src={e.img} alt="" draggable="false" />
                  <p>{e.heading}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <Team
        openBuildTeamDialog={openBuildTeamDialog}
        handleBuildTeamCloseDialog={handleBuildTeamCloseDialog}
      />
    </>
  );
};

export default Home;
