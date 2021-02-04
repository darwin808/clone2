import React from "react";
import "./DenimCardContainer.scss";
import { loading } from "@apollo/client";

import DenimCard from "./DenimCard";

function DenimCardContainer({
  header,
  subheader,
  price,
  title,
  subtitle,
  img1,
  img1Hover,
  img2,
  img2Hover,
  img3,
  img3Hover,
}) {
  if (loading) return null;

  return (
    <div className="DenimCardContainer">
      <section className="headerContainer">
        <p>{header}</p>

        <p id="subheader">{subheader}</p>
      </section>
      <section className="bodyContainer">
        <DenimCard
          img={img1}
          imgHover={img1Hover}
          title={title}
          subtitle={subtitle}
          price={price}
          footer="2 washes available"
        />
        <DenimCard
          img={img2}
          imgHover={img2Hover}
          title={title}
          subtitle={subtitle}
          price={price}
          footer="2 washes available"
        />
        {img3 && (
          <DenimCard
            img={img3}
            imgHover={img3Hover}
            title={title}
            subtitle={subtitle}
            price={price}
            footer="2 washes available"
          />
        )}
      </section>
    </div>
  );
}

export default DenimCardContainer;
