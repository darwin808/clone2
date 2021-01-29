import React from "react";
import "./Section3Slider.scss";
function Section3Slider({ header, body, s3img, s3rightP }) {
  return (
    <div className="Section3Slider">
      <div className="Section3Left">
        <div className="S3TopLeft">
          <p>★★★★☆</p>
          <h1>"{header}"</h1>
          <p id="s3LeftBody">{body}</p>
        </div>
        <div className="empty"></div>
      </div>
      <div className="Section3Right">
        <img src={s3img} alt="12312" />
        <p>{s3rightP}</p>
      </div>
    </div>
  );
}

export default Section3Slider;
