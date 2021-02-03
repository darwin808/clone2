import React from "react";
import "./DenimCardContainer.scss";
import DenimModel1 from "../../assets/Men/Denim/denim1.jpg";
import DenimModel2 from "../../assets/Men/Denim/denim2.jpg";
import HoverModel1 from "../../assets/Men/Denim/hoverModel1.jpg";
import HoverModel2 from "../../assets/Men/Denim/hoverModel2.jpg";
import { loading } from "@apollo/client";

import DenimCard from "./DenimCard";

function DenimCardContainer({ header, subheader, price, title, subtitle }) {
  if (loading) return null;

  return (
    <div className="DenimCardContainer">
      <section className="headerContainer">
        <p>{header}</p>

        <p id="subheader">{subheader}</p>
      </section>
      <section className="bodyContainer">
        <DenimCard
          img={DenimModel1}
          imgHover={HoverModel1}
          title={title}
          subtitle={subtitle}
          price={price}
          footer="2 washes available"
        />
        <DenimCard
          img={DenimModel2}
          imgHover={HoverModel2}
          title={title}
          subtitle={subtitle}
          price={price}
          footer="2 washes available"
        />
      </section>
    </div>
  );
}

export default DenimCardContainer;
