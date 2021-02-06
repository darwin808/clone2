import React from "react";
import "./DenimCardContainer2.scss";
import { loading } from "@apollo/client";
import DenimeCardPicOnly from "./DenimCardPicOnly";
import DenimCard from "./DenimCard";

function DenimCardContainer({
  id,
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
          id={id}
          img={img1}
          imgHover={img1Hover}
          title={title}
          subtitle={subtitle}
          price={price}
          footer="2 washes available"
        />
        <DenimCard
          id={id}
          img={img2}
          imgHover={img2Hover}
          title={title}
          subtitle={subtitle}
          price={price}
          footer="2 washes available"
        />
        <DenimeCardPicOnly img={img3} />
      </section>
    </div>
  );
}

export default DenimCardContainer;
