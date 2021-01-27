import React from "react";
import "./AboutTab.scss";
import { useDispatch } from "react-redux";
import { falseAbout } from "../../Actions/Actions";
import AboutPic1 from "../../assets/AboutPics/aboutPic1.jpg";
import AboutPic2 from "../../assets/AboutPics/aboutPic2.jpg";
import AboutPic3 from "../../assets/AboutPics/aboutPic3.jpg";
import AboutPic4 from "../../assets/AboutPics/aboutPic4.jpg";

function AboutTab() {
  const dispatch = useDispatch();
  return (
    <div
      className="AboutTab"
      onMouseLeave={() => {
        dispatch(falseAbout());
      }}>
      <div className="Featured">
        <h4 className="FeatureHead">
          <img src={AboutPic1} alt="qwe" id="aboutPic1" />
        </h4>
        <p className="Fetured-items">Skinny</p>
      </div>
      <div className="Apparel">
        <h4 className="ApparelHead">
          <img src={AboutPic2} alt="1231" id="aboutPic2" />
        </h4>
        <p className="Apparel-items">Slim</p>
      </div>
      <div className="ShoesAccessories">
        <h4 className="ShoeAccHead">
          <img src={AboutPic3} alt="ada" id="aboutPic3" />
        </h4>
        <p className="ShoeAcc-items">Denim Fits For Her</p>
      </div>
      <div className="Trendingthisweek">
        <h4 className="TrendHead">
          <img src={AboutPic4} alt="dada" id="aboutPic4" />
        </h4>
        <p className="Trend-items-denim">Denim Fits For Him</p>
      </div>
    </div>
  );
}

export default AboutTab;
