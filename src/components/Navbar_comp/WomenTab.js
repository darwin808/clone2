import React from "react";
import "./WomenTab.scss";

function WomenTab() {
  return (
    <div className="WomenTab">
      <div className="Featured">
        <h4 className="FeatureHead">Featured</h4>
        <p className="Fetured-items" id="sale">
          Sale
        </p>
        <p className="Fetured-items">New Arrivals</p>
        <p className="Fetured-items">Best-Sellers</p>
        <p className="Fetured-items"> The $58 Perform Pocket Legging</p>
        <p className="Fetured-items">The Way-High Jean</p>
        <p className="Fetured-items">100% Human</p>
        <p className="Fetured-items">The Sustainable Collection</p>
        <p className="Fetured-items">Face Masks</p>
        <p className="Fetured-items">Gift Cards</p>
      </div>
      <div className="Apparel">
        <h4 className="ApparelHead">Apparel</h4>
        <p className="Apparel-items">Sweaters</p>
        <p className="Apparel-items">Sweatshirts</p>
        <p className="Apparel-items">Denim</p>
        <p className="Apparel-items">Bottoms</p>
        <p className="Apparel-items">Outerwear</p>
        <p className="Apparel-items">T-Shirts & Bodysuits</p>
        <p className="Apparel-items">Tops</p>
        <p className="Apparel-items">Dresses & Jumpsuits</p>
        <p className="Apparel-items">Activewear</p>
        <p className="Apparel-items">Intimates</p>
      </div>
      <div className="ShoesAccessories">
        <h4 className="ShoeAccHead">Shoes & Accessories</h4>
        <p className="ShoeAcc-items">Shoes & Boots</p>
        <p className="ShoeAcc-items">Bags & Backpack</p>
        <p className="ShoeAcc-items">Face Mask & Bandanas</p>
        <p className="ShoeAcc-items">Accesoris</p>
      </div>
      <div className="Trendingthisweek">
        <h4 className="TrendHead">Trending this week</h4>
        <p className="Trend-items">The Cozy Edit</p>
        <p className="Trend-items">Cold Weather Picks</p>
        <p className="Trend-items">Tonal Dressing</p>
      </div>
    </div>
  );
}

export default WomenTab;
