import "./DenimCardPicOnly.scss";

import React from "react";

function DenimCardPicOnly({ img }) {
  return (
    <div className="DenimCard">
      <div className="headerCard">
        <img src={img} alt="qweq" />
      </div>
      <div className="bodyCard">
        <p className="titleCard">{""}</p> <p className="priceCard">{""}</p>
      </div>
      <div className="subtitleCard">
        <p>{""}</p>
      </div>

      <div className="fooCard">
        <p>{""}</p>
      </div>
    </div>
  );
}

export default DenimCardPicOnly;
