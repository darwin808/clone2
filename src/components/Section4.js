import "./Section4.scss";

import React from "react";
import Section4Card from "./Section4_comp/Section4Card";

import s4img1 from "../assets/s4img1.jpg";
import s4img2 from "../assets/s4img2.jpg";

function Section4() {
  return (
    <div className="Section4">
      <h1 className="s4Header"> Best-Sellers</h1>
      <div className="s4Body">
        <Section4Card s4Img={s4img1} desc="Women's" />
        <Section4Card s4Img={s4img2} desc="Men's" />
      </div>
    </div>
  );
}

export default Section4;
