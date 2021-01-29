import React, { useState } from "react";
import Section3Slider from "./Section3_comp/Section3Slider";
import s3img1 from "../assets/s3img1.jpg";
import s3img2 from "../assets/s3img2.jpeg";
import s3img3 from "../assets/s3img3.jpg";
import "./Section3.scss";

function Section3() {
  const [counter, setcounter] = useState(0);
  const card = [
    <Section3Slider
      s3rightP="Shop The Glove Boot in ReKnit"
      s3img={s3img1}
      body="-Amber J., The Glove Boot in ReKnit"
      header="These boots were comfortable from day one. They look great with skirts, jeans, and dresses. If I could get them in every color, I would."
    />,

    <Section3Slider
      s3rightP="Shop The Perform Legging"
      s3img={s3img2}
      body="-Ashley F., The Perform Legging"
      header="These are amazing leggings. I've ordered two more pairs! They feel like butter and you can go from workout to dressy. Love them!"
    />,

    <Section3Slider
      s3rightP="Shop The Oversized Alpaca Crew"
      s3img={s3img3}
      body="-Jennifer L., The Oversized Alpaca Crew"
      header="Love this sweater. It's somehow both basic and elegant AND super cozy."
    />,
  ];

  const AddSlide = () => {
    counter > 1 ? setcounter(0) : setcounter(counter + 1);
  };

  const minusSlide = () => {
    counter < 1 ? setcounter(2) : setcounter(counter - 1);
  };

  return (
    <div className="Section3">
      <h1 className="S3MainHeader">FROM THE PEOPLE</h1>
      <div className="S3Arrow">
        <i class="fas fa-angle-left fa-3x" onClick={minusSlide}></i>
        <i class="fas fa-angle-right fa-3x" onClick={AddSlide}></i>
      </div>

      {card[counter]}
    </div>
  );
}

export default Section3;
