import "./DenimBodyHeader.scss";
import React from "react";

export default function DenimBodyHeader({ img }) {
  return (
    <div className="DenimBodyHeader">
      <img src={img} alt="qweq" />

      <div className="btnContainer">
        <div className="btnDenim" id="filterBtn">
          <p>Filter </p>
          <i class="fas fa-chevron-down"></i>
        </div>
        <div className="btnDenim" id="slimBtn">
          <p> Slim Fit</p> <i class="fas fa-times"></i>
        </div>
        <div className="btnDenim" id="clearBtn">
          Clear All
        </div>
      </div>
    </div>
  );
}
