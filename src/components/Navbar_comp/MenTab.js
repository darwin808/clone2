import React from "react";
import "./MenTab.scss";
import { useDispatch } from "react-redux";
import { falseMen } from "../../Actions/Actions";

function MenTab() {
  const dispatch = useDispatch();
  return (
    <div
      className="MenTab"
      onMouseLeave={() => {
        dispatch(falseMen());
      }}>
      <div className="Featured">
        <h4 className="FeatureHead">Featured</h4>
        <p className="Fetured-items" id="sale">
          Sale
        </p>
        <p className="Fetured-items">New Arrivals</p>
        <p className="Fetured-items">Best-Sellers</p>
        <p className="Fetured-items"> Uniform</p>
        <p className="Fetured-items">100% Human</p>
        <p className="Fetured-items">The Sustainable Collection</p>
        <p className="Fetured-items">Face Masks</p>
        <p className="Fetured-items">Gift Cards</p>
      </div>
      <div className="Apparel">
        <h4 className="ApparelHead">Apparel</h4>
        <p className="Apparel-items">Sweaters</p>
        <p className="Apparel-items">Sweatshirts & Sweatpants</p>
        <p className="Apparel-items">Denim</p>
        <p className="Apparel-items">Bottoms</p>
        <p className="Apparel-items">Outerwear</p>
        <p className="Apparel-items">T-Shirts & Bodysuits</p>
        <p className="Apparel-items">Tops</p>
        <p className="Apparel-items">Underwear</p>
      </div>
      <div className="ShoesAccessories">
        <h4 className="ShoeAccHead">Sneakers </h4>
        <p className="ShoeAcc-items">Bags & Backpack</p>
        <p className="ShoeAcc-items">Face Mask & Bandanas</p>
        <p className="ShoeAcc-items">Accesoris</p>
      </div>
      <div className="Trendingthisweek">
        <h4 className="TrendHead">Popular this week</h4>
        <p className="Trend-items">Uniform Essentials</p>
        <p className="Trend-items">Cold Weather Picks</p>
        <p className="Trend-items">The Lounge Shop</p>
      </div>
    </div>
  );
}

export default MenTab;
