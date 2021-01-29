import "./Section4Card.scss";

import React from "react";
function Section4Card({ desc, s4Img }) {
  return (
    <div className="Section4Card">
      <img src={s4Img} alt="wer" />
      <p>{desc}</p>
    </div>
  );
}

export default Section4Card;
