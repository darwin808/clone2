import "./DenimCard.scss";

import React, { useState } from "react";
import Sizes from "./Sizes";
import { useSelector, useDispatch } from "react-redux";
import { addItemInCart } from "../../Actions/Actions";
function DenimCard({ id, img, title, subtitle, price, footer, imgHover }) {
  const dispatch = useDispatch();
  const cart = useSelector((e) => e.CartReducer);
  const [ShowHover, setShowHover] = useState(false);
  const [ShowSizes, setShowSizes] = useState(false);

  const hoverOn = () => {
    setShowHover(true);
  };

  const hoverOff = () => {
    setShowHover(false);
  };

  const hoverv2On = () => {
    setShowSizes(true);
  };
  const hoverv2Off = () => {
    setShowSizes(false);
  };

  const AddCart = () => {
    dispatch(addItemInCart({ title, price, img, id }));
    console.log(cart);
  };

  return (
    <div className="DenimCard">
      <div className="circle">
        <i class="far fa-heart"></i>
      </div>
      <div
        className="headerCard"
        onMouseEnter={hoverOn}
        onMouseLeave={hoverOff}>
        <img src={ShowHover ? imgHover : img} alt="qweq" />
        <div
          onMouseEnter={hoverv2On}
          className="sizes"
          style={{ display: `${ShowHover ? "flex" : "none"}` }}>
          <p>+ Quick add</p>
        </div>

        <div onMouseLeave={hoverv2Off} className="SizesList" onClick={AddCart}>
          {ShowSizes && <Sizes />}
        </div>
      </div>
      <div className="bodyCard">
        <p className="titleCard">{title}</p>{" "}
        <p className="priceCard">{price}</p>
      </div>
      <div className="subtitleCard">
        <p>{subtitle}</p>
      </div>

      <div className="fooCard">
        <p>{footer}</p>
      </div>
    </div>
  );
}

export default DenimCard;
