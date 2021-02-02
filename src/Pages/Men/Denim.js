import React, { useState, useEffect, useMemo } from "react";
import DenimBodyHeader from "../../components/Denim/DenimBodyHeader";
import "./Denim.scss";
import hero from "../../assets/Men/Denim/head.jpg";
import LeftDenim from "../../components/Denim/LeftDenim";
import DenimCardContainer from "../../components/Denim/DenimCardContainer";

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

function Denim() {
  const [scrollerX, scrollerY] = useScroll();
  const scrollingDiv = () => {};

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
        <DenimCardContainer header="What's New: The $88 Selvedge Slim Fit Jean" />
        <DenimCardContainer header="What's New: The $88 Selvedge Slim Fit Jean" />
      </section>
    </div>
  );
}

export default Denim;
