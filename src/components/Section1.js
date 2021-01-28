import React from "react";
import "./Section1.scss";
import s1card1 from "../assets/s1card1.jpg";
import s1card2 from "../assets/s1card2.jpg";
import s1card3 from "../assets/s1card3.jpg";

const Section1 = () => {
  return (
    <div className="section1">
      <div className="section1-Card1">
        <img src={s1card1} alt="qweqw" id="s1card-img" />
        <h1 className="section1-card1-items">The Modern Breton</h1>
        <p className="section1-card1-items">
          Warm enough for winter. Bright enough for spring. Just $38
        </p>
      </div>
      <div className="section1-Card2">
        <img src={s1card2} alt="qweqw" id="s1card-img" />
        <h1 className="section1-card2-items">Invisible Underwear</h1>
        <p className="section1-card2-items">
          Soft, seamless underwear with no VPL--
          <br /> it's step one of every great outfit.
        </p>
      </div>
      <div className="section1-Card3">
        <img src={s1card3} alt="qweqw" id="s1card-img" />
        <h1 className="section1-card3-items">The Way-High Jean</h1>
        <p className="section1-card3-items">
          Way high. Way cute. And way, way flattering.
          <br />
          Introducing our highest rie yet.
        </p>
      </div>
    </div>
  );
};

export default Section1;
