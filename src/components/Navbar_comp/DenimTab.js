import React from "react";
import "./DenimTab.scss";
import { useDispatch } from "react-redux";
import { falseDenim } from "../../Actions/Actions";
import denim1 from "../../assets/denim1.jpg";
import denim2 from "../../assets/denim2.jpg";
import { useHistory } from "react-router-dom";

function DenimTab() {
  const dispatch = useDispatch();
  const history = useHistory();
  return (
    <div
      className="DenimTab"
      onMouseLeave={() => {
        dispatch(falseDenim());
      }}>
      <div className="Featured">
        <h4 className="FeatureHead">Women</h4>
        <p className="Fetured-items">Skinny</p>
        <p className="Fetured-items">Slim/Straight</p>
        <p className="Fetured-items"> Bootcut</p>
        <p className="Fetured-items">Wide Leg/Flare</p>
        <p className="Fetured-items">Relaxed</p>
        <p className="Fetured-items">Skirt & Short</p>
        <p className="Fetured-items">Jacket</p>
        <p className="Fetured-items">Shop All</p>
      </div>
      <div className="Apparel">
        <h4 className="ApparelHead" onClick={() => history.push("/men")}>
          Men
        </h4>
        <p className="Apparel-items">Slim</p>
        <p className="Apparel-items">Straight</p>
        <p className="Apparel-items">Athletic</p>
        <p className="Apparel-items">Jacket</p>
        <p className="Apparel-items">Skinny</p>
        <p className="Apparel-items">Shop All</p>
      </div>
      <div className="ShoesAccessories">
        <h4 className="ShoeAccHead">
          <img src={denim1} alt="ada" id="denim1" />
        </h4>
        <p className="ShoeAcc-items">Denim Fits For Her</p>
      </div>
      <div className="Trendingthisweek">
        <h4 className="TrendHead">
          <img src={denim2} alt="dada" id="denim2" />
        </h4>
        <p className="Trend-items-denim">Denim Fits For Him</p>
      </div>
    </div>
  );
}

export default DenimTab;
