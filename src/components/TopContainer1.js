import React from "react";
import topContainterBG from "../assets/topcontainerbg.jpg";
import Navbar2 from "./Navbar2";
import "./TopContainer1.scss";

function TopContainer1() {
  return (
    <div className="topcontainer">
      <Navbar2 />
      <img src={topContainterBG} alt="1231231" className="topContainerBG" />

      <div className="topContainer-Center">
        <h1 className="topContainer-header">Hello, Charcoal.</h1>
        <p className="topContainer-items">
          Out best-selling legging has arrived in a fresh new hue.
        </p>
        <p className="topContainer-items">
          In other word: It's time to update your legging lineup.
        </p>
        <button className="topContainer-button">SHOP NOW</button>
      </div>

      <p className="topContainer-foo">
        Sign up for 10% off your first order. Valid within two days of signup.
      </p>
    </div>
  );
}

export default TopContainer1;
