import React from "react";
import "./Section5Slider.scss";

function Section5Slider({ s5img, desc }) {
  return (
    <div className="Section5Slider">
      <img src={s5img} alt="wer" />
      <h2>{desc}</h2>
    </div>
  );
}

export default Section5Slider;
