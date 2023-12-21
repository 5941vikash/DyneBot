import React, { useState } from "react";
import "./Home.css";
import backimg from "./Assets/backimg.png";

// Right Arrow Icon
import ArrowForwardOutlinedIcon from "@mui/icons-material/ArrowForwardOutlined";
import Team from "../../Components/Team/Team";

import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";

import {
  firstHomeBox,
  secondHomeBox,
  thirdHomeBox,
  fourthHomeBox,
  fifthHomeBox,
  sixthHomeBox,
} from "./HomeBox";
import SliderBox from "./SliderBox";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Slider
import Slider from "react-slick";

// Slider Responsive
const settings = {
  dots: true,
  infinite: false,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 2,
  initialSlide: 0,
  prevArrow: (
    <ArrowBackIosIcon
      sx={{
        color: "#16205f",
      }}
    />
  ),
  nextArrow: (
    <ArrowForwardIosIcon
      sx={{
        color: "#16205f",
      }}
    />
  ),
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

  const techList = fifthHomeBox.map((e, i) => (
    <div className="techBox" key={i}>
      <img src={e.img} alt="" />
    </div>
  ));

  const clientList = sixthHomeBox.map((e, i) => (
    <div className="techBox" key={i}>
      <img src={e.img} alt="" />
    </div>
  ));

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
          <h5>Solutions</h5>
          <h2>Software Solutions, with expert software engineering teams</h2>
          <p>
            We specialize in helping you build a team of expert developers,
            testers, and leaders.
          </p>
          <div className="box hide">
            {firstHomeBox.map((e, i) => {
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
          <SliderBox boxes={firstHomeBox} />
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

          <div className="box hide">
            {thirdHomeBox.map((e, i) => {
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

          <SliderBox boxes={thirdHomeBox} />
        </div>

        <div className="homeFifthCont">
          <h5>Specialized</h5>
          <h2>Specialized Staff We Provide</h2>

          <div className="box hide">
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

        <div className="homeSixthCont">
          <h5>Specialized</h5>
          <h2>Technologies</h2>
          <div className="box">
            <Slider {...settings}>{techList}</Slider>
          </div>
        </div>

        <div className="homeSixthCont">
          <h5>Clients</h5>
          <h2>Amazing clients who trust us</h2>
          <div className="box">
            <Slider {...settings}>{clientList}</Slider>
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
