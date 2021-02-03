import React from "react";
import "./DenimCardContainer.scss";
import DenimModel1 from "../../assets/Men/Denim/denim1.jpg";
import DenimModel2 from "../../assets/Men/Denim/denim2.jpg";
import HoverModel1 from "../../assets/Men/Denim/hoverModel1.jpg";
import HoverModel2 from "../../assets/Men/Denim/hoverModel2.jpg";
import DenimCard from "./DenimCard";

function DenimCardContainer({ header, subHeader }) {
  return (
    <div className="DenimCardContainer">
      <section className="headerContainer">
        <p>{header}</p>
        <p id="subheader">{subHeader}</p>
      </section>
      <section className="bodyContainer">
        <DenimCard
          img={DenimModel1}
          imgHover={HoverModel1}
          title="The Selvedge Slim Fit Jeans"
          subtitle="Indigo Rinse"
          price="P4400"
          footer="2 washes available"
        />
        <DenimCard
          img={DenimModel2}
          imgHover={HoverModel2}
          title="The Selvedge Slim Fit Jeans"
          subtitle="Indigo Rinse"
          price="P4400"
          footer="2 washes available"
        />
      </section>
    </div>
  );
}

export default DenimCardContainer;
