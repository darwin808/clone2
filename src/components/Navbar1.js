import React, { useEffect, useState } from "react";
import "./Navbar1.scss";
import { useDispatch } from "react-redux";
import {
  falseAbout,
  falseDenim,
  falseMen,
  falseWomen,
} from "../Actions/Actions";
import phsvg from "../assets/AboutPics/phflag.svg";
function Navbar1() {
  const [counter, setcounter] = useState(0);
  const dispatch = useDispatch();
  const setNavBG = () => {
    dispatch(falseDenim());
    dispatch(falseMen());
    dispatch(falseWomen());
    dispatch(falseAbout());
  };

  useEffect(() => {
    setTimeout(() => {
      counter > 1 ? setcounter(0) : setcounter(counter + 1);
    }, 5000);
  }, [counter]);

  const headline = [
    " The Way-High Jean—our highest rise ever. Shop Now",
    "   New year, new legging. Shop The Perform Pocket Legging",
    "Sign Up for 10% off your first order*",
  ];
  return (
    <div onMouseEnter={setNavBG} className="navbar1">
      <div className="nav1-center">{headline[counter]}</div>
      <p className="nav1-para3">Enable Accesibility</p>
      <div className="nav1-right">
        <img height="10px" src={phsvg} alt="123" id="svgPh" />
        <p>PHP</p>
      </div>
    </div>
  );
}

export default Navbar1;
