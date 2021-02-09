import React, { useState, useEffect, useMemo } from "react";
import "./DenimSlider.scss";
import slider1 from "../../assets/Men/Denim/slider1.jpg";
import slider2 from "../../assets/Men/Denim/slider2.jpg";
import slider4 from "../../assets/Men/Denim/slider3.jpg";
import slider3 from "../../assets/Men/Denim/slider4.jpg";
import slider5 from "../../assets/Men/Denim/slider5.jpg";
import slider6 from "../../assets/Men/Denim/slider6.jpg";
function DenimSlider() {
  const [counter, setcounter] = useState(0);
  const [collection, setcollection] = useState([
    { slider: slider1, item1: "The Performance", item2: "Chino", item3: "$72" },
    {
      slider: slider2,
      item1: "The Organic",
      item2: "Cotton Crew",
      item3: "$18",
    },
    {
      slider: slider3,
      item1: "The Relax 4 Way",
      item2: "Stretched Organic Jean",
      item3: "$82",
    },
    { slider: slider4, item1: "The No Sweat", item2: "Sweater", item3: "$64" },
    {
      slider: slider5,
      item1: "The Heavyweight",
      item2: "Overshirt",
      item3: "$78",
    },
    {
      slider: slider6,
      item1: "The Standard Fit",
      item2: "Japanese Oxford Shirt",
      item3: "$62",
    },
  ]);

  useEffect(() => {
    sliderFunc();
  }, [counter]);

  const increment = () => {
    counter >= 3 ? setcounter(0) : setcounter(counter + 1);
  };

  const decrement = () => {
    counter <= 0 ? setcounter(3) : setcounter(counter - 1);
  };

  const sliderFunc = () => {
    setTimeout(() => {
      counter >= 3 ? setcounter(0) : setcounter(counter + 1);
    }, 1000);
  };

  return (
    <div className="DenimSlider">
      <h1>The Uniform Collection</h1>
      <div className="SliderBody">
        <div onClick={increment} id="leftBtn">
          <i class="fas fa-chevron-left"></i>
        </div>
        <div onClick={decrement} id="rightBtn">
          <i class="fas fa-chevron-right"></i>
        </div>
        <div className="card1">
          <img src={collection[counter].slider} alt="qweqw" />
          <p className="desc">{collection[counter].item1}</p>
          <p className="cardItems">{collection[counter].item2}</p>
          <p className="cardItems">{collection[counter].item3}</p>
        </div>

        <div className="card1">
          <img src={collection[counter + 1].slider} alt="qweqw" />
          <p className="desc">{collection[counter + 1].item1}</p>
          <p className="cardItems">{collection[counter + 1].item2}</p>
          <p className="cardItems">{collection[counter + 1].item3}</p>
        </div>

        <div className="card1">
          <img src={collection[counter + 2].slider} alt="qweqw" />
          <p className="desc">{collection[counter + 2].item1}</p>
          <p className="cardItems">{collection[counter + 2].item2}</p>
          <p className="cardItems">{collection[counter + 2].item3}</p>
        </div>
      </div>
    </div>
  );
}

export default DenimSlider;
