import "./DenimCard.scss";

import React from "react";

function DenimCard({ img, title, subtitle, price, footer }) {
  return (
    <div className="DenimCard">
      <div className="headerCard">
        <img src={img} alt="" />
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
