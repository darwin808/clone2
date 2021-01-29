import React from "react";
import "./Section2_card.scss";
function Section2_card({ item1, item2, s2Img }) {
  return (
    <div className="Section2_Card">
      <img src={s2Img} alt="123123" />
      <p>{item1}</p>
      <p className="Section2-foo">{item2}</p>
    </div>
  );
}

export default Section2_card;
