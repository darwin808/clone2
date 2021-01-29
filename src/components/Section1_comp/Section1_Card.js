import React from "react";
import "./Section1_Card.scss";

function Section1_Card({ s1cardImg, item1, item2 }) {
  return (
    <div className="section1-Card">
      <img src={s1cardImg} alt="qweqw" id="s1card-img" />
      <h1 className="section1-card1-items">{item1}</h1>
      <p className="section1-card1-items">{item2}</p>
    </div>
  );
}

export default Section1_Card;
