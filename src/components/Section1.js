import React from "react";
import "./Section1.scss";
import s1card1 from "../assets/s1card11.jpg";
import s1card2 from "../assets/s1card2.jpg";
import s1card3 from "../assets/s1card3.jpg";
import Section1_Card from "./Section1_comp/Section1_Card";

const Section1 = () => {
  return (
    <div className="section1">
      <div className="container-s1">
        <Section1_Card
          s1cardImg={s1card1}
          item1="The Modern Breton"
          item2="   Warm enough for winter. Bright enough for spring. Just $38"
        />

        <Section1_Card
          s1cardImg={s1card2}
          item1="Invisible Underwear"
          item2="Soft, seamless underwear with no VPL--
          it's step one of every great outfit."
        />

        <Section1_Card
          s1cardImg={s1card3}
          item1="The Way-High Jean"
          item2=" Way high. Way cute. And way, way flattering.
          Introducing our highest rie yet"
        />
      </div>
    </div>
  );
};

export default Section1;
