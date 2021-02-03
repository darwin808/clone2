import React, { useState, useEffect } from "react";
import DenimBodyHeader from "../../components/Denim/DenimBodyHeader";
import "./Denim.scss";
import hero from "../../assets/Men/Denim/head.jpg";
import LeftDenim from "../../components/Denim/LeftDenim";
import DenimCardContainer from "../../components/Denim/DenimCardContainer";
import { useQuery, gql, error } from "@apollo/client";

function useScroll() {
  const [scroller, setScroll] = useState([window.scrollX, window.scrollY]);
  useEffect(() => {
    const x = () => {
      setScroll([window.scrollX, window.scrollY]);
    };
    window.addEventListener("scroll", x);
  }, []);
  return scroller;
}

const Denim = () => {
  /////////////////////*******************GQL************** */
  const getDenimData = gql`
    query MyQuery {
      denims {
        header
        id
        price
        subheader
        subtitle
        title
      }
    }
  `;

  /////////////////*************************************GQL */

  /////////////******************************data */
  const { loading, data } = useQuery(getDenimData);
  const [scrollerX, scrollerY] = useScroll();
  const scrollingDiv = () => {};
  if (loading) return null;
  if (error) return `Something went wrong: ${error}`;
  return (
    <div className="Denim">
      <section
        className="leftDenim"
        style={{ top: `${scrollerY > 90 ? "4rem" : "10rem"}` }}>
        <LeftDenim />
      </section>
      <section className="DenimHeader">
        <p className="items">Home</p>
        <p className="items">/</p>
        <p className="items">Men</p>
        <p className="items">/</p>
        <p className="items">Denim</p>
      </section>
      <section className="DenimBody">
        <DenimBodyHeader img={hero} />

        <DenimCardContainer
          header={data.denims[0].header}
          title={data.denims[0].title}
          subtitle={data.denims[0].subtitle}
          price={data.denims[0].price}
        />
        <DenimCardContainer
          header={loading ? null : data.denims[1].header}
          subHeader={loading ? null : data.denims[1].subheader}
        />
        <DenimCardContainer header="What's New: The $88 Selvedge Slim Fit Jean" />
        <DenimCardContainer header="What's New: The $88 Selvedge Slim Fit Jean" />
        <DenimCardContainer header="What's New: The $88 Selvedge Slim Fit Jean" />
        <DenimCardContainer header="What's New: The $88 Selvedge Slim Fit Jean" />
        <DenimCardContainer header="What's New: The $88 Selvedge Slim Fit Jean" />
        <DenimCardContainer header="What's New: The $88 Selvedge Slim Fit Jean" />
        <DenimCardContainer header="What's New: The $88 Selvedge Slim Fit Jean" />
        <DenimCardContainer header="What's New: The $88 Selvedge Slim Fit Jean" />
        <DenimCardContainer header="What's New: The $88 Selvedge Slim Fit Jean" />
        <DenimCardContainer header="What's New: The $88 Selvedge Slim Fit Jean" />
      </section>
    </div>
  );
};

export default Denim;
