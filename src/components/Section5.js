import "./Section5.scss";
import React, { useState } from "react";
import Section5Slider from "./Section5_comp/Section5Slider";
import s5img1 from "../assets/s5img1.jpg";
import s5img2 from "../assets/s5img2.jpg";
import s5img3 from "../assets/s5img3.jpg";
import s5img4 from "../assets/s5img4.jpg";
import s5img5 from "../assets/s5img5.jpg";
import s5img6 from "../assets/s5img6.jpg";
import s5img7 from "../assets/s5img7.jpg";
import s5img8 from "../assets/s5img8.jpg";
import s5img9 from "../assets/s5img9.jpg";
import s5img10 from "../assets/s5img10.jpg";
import s5img11 from "../assets/s5img11.jpg";
import s5img12 from "../assets/s5img12.jpg";
import S5LeftFoo1 from "./Section5_comp/S5LeftFoo1";
import S5RightFoo1 from "./Section5_comp/S5RightFoo1";
import S5Foo2 from "./Section5_comp/S5Foo2";

function Section5() {
  const [counter, setcounter] = useState(0);
  const increment = () => {
    counter > 7 ? setcounter(0) : setcounter(counter + 1);
  };
  const decrement = () => {
    counter < 1 ? setcounter(7) : setcounter(counter - 1);
  };

  const collection = [
    <Section5Slider
      s5img={s5img1}
      desc="@truely.style x The Oversized Alpaca Crew"
    />,
    <Section5Slider
      s5img={s5img2}
      desc="@jesss.thetix x The Forever Sneaker"
    />,
    <Section5Slider s5img={s5img3} desc="@onpenn x The Super-Straight Jean" />,
    <Section5Slider
      s5img={s5img4}
      desc="@aaricanichole x The 100% Human Face Mask"
    />,
    <Section5Slider s5img={s5img5} desc="@littlemixico x The Perform Bra" />,
    <Section5Slider
      s5img={s5img6}
      desc="@shelbyeastman x The Denim Chore Jacket"
    />,
    <Section5Slider
      s5img={s5img7}
      desc="@winston_nguyen x The Put-Together Pleat Pant"
    />,
    <Section5Slider s5img={s5img8} desc="@kreativekloth x The Chore Jacket" />,
    <Section5Slider
      s5img={s5img9}
      desc="@mokhirashakira x The Oversized Blazer"
    />,
    <Section5Slider
      s5img={s5img10}
      desc="@elizabethjoysanders x The Glove Boot"
    />,
    <Section5Slider
      s5img={s5img11}
      desc="@rhiannonashlee x The Alpaca Sweater Tee"
    />,
    <Section5Slider
      s5img={s5img12}
      desc="@sarashieldsr x The Straight Leg Crop"
    />,
  ];

  return (
    <div className="Section5">
      <h1>On the Gram</h1>
      <div className="S5Slider">
        <i onClick={increment} className="fas fa-angle-left fa-3x" />
        <i onClick={decrement} className="fas fa-angle-right fa-3x" />
        {collection[counter]} {collection[counter + 1]}
        {collection[counter + 2]} {collection[counter + 3]}
      </div>

      <div className="S5Foo1">
        <S5LeftFoo1 />
        <S5RightFoo1 />
      </div>
    </div>
  );
}

export default Section5;
