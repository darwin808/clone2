import React from "react";
import "./Section2.scss";
import Section2_card from "./Section2_comp/Section2_card";
import s2card1 from "../assets/s2card1.jpg";
import s2card2 from "../assets/s2card2.jpg";

function Section2() {
  return (
    <div className="Section2">
      <h1 className="section2Head">Our Promise-- Radical Transparency</h1>
      <div className="section2Body">
        <Section2_card
          s2Img={s2card1}
          item1="Our sustainability initiatives: recycled materials, organin cotton, and more"
          item2="Lear More"
        />
        <Section2_card
          s2Img={s2card2}
          item1="Ethically Made. Designed to Last."
          item2="Lear More"
        />
      </div>
    </div>
  );
}

export default Section2;
