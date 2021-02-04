import React, { useState } from "react";
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
    slider1,
    slider2,
    slider3,
    slider4,
    slider5,
    slider6,
  ]);

  const increment = () => {
    counter >= 3 ? setcounter(0) : setcounter(counter + 1);
  };

  const decrement = () => {
    counter <= 0 ? setcounter(3) : setcounter(counter - 1);
  };
  return (
    <div className="DenimSlider">
      <h1>The Uniform Collection</h1>
      <div className="SliderBody">
        <button onClick={increment} id="leftBtn">
          add
        </button>
        <button onClick={decrement} id="rightBtn">
          minus
        </button>
        <img src={collection[counter]} alt="qweqw" />
        <img src={collection[counter + 1]} alt="qweqw" />
        <img src={collection[counter + 2]} alt="qweqw" />
      </div>
    </div>
  );
}

export default DenimSlider;
