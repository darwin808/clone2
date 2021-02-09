import "./LaundryFoo.scss";
import laundry from "../../assets/Men/Denim/ladunry.jpg";
import React from "react";

function LaundryFoo() {
  return (
    <div className="LaundryFoo">
      <p className="header">Ethically made. Perfectly fit.</p>
      <img src={laundry} alt="eqwe" />
      <p className="foo">Go inside the world's cleanest denim factory</p>
    </div>
  );
}

export default LaundryFoo;
