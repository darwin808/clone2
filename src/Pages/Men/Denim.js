import React, { useState, useEffect } from "react";
import { useQuery, gql, error } from "@apollo/client";
import { useDispatch } from "react-redux";
import { fetchDbData, setSubtotal } from "../../Actions/Actions";

import DenimBodyHeader from "../../components/Denim/DenimBodyHeader";
import "./Denim.scss";
import hero from "../../assets/Men/Denim/head.jpg";
import LeftDenim from "../../components/Denim/LeftDenim";
import DenimCardContainer from "../../components/Denim/DenimCardContainer";
import DenimCardContainer2 from "../../components/Denim/DenimCardContainer2";

import DenimModel1 from "../../assets/Men/Denim/denim1.jpg";
import DenimModel2 from "../../assets/Men/Denim/denim2.jpg";
import HoverModel1 from "../../assets/Men/Denim/hoverModel1.jpg";
import HoverModel2 from "../../assets/Men/Denim/hoverModel2.jpg";

import Slim4watModel1 from "../../assets/Men/Denim/Slim4wayModel1.jpg";
import Slim4watModel1Hover from "../../assets/Men/Denim/Slim4wayModel1Hover.jpg";
import Slim4watModel2 from "../../assets/Men/Denim/Slim4wayModel2.jpg";
import Slim4watModel2Hover from "../../assets/Men/Denim/Slim4wayModel2Hover.jpg";
import Slim4wayImg3 from "../../assets/Men/Denim/Slim4wayImg3.jpg";

import relax4WayModel1 from "../../assets/Men/Denim/relax4WayModel1.jpg";
import relax4WayModel2 from "../../assets/Men/Denim/relax4WayModel2.jpg";
import relax4WayHover1 from "../../assets/Men/Denim/relax4WayHover1.jpg";
import relax4WayHover2 from "../../assets/Men/Denim/relax4WayHover1.jpg";
import relax4WayLast from "../../assets/Men/Denim/relax4WayLast.jpg";

import athleteModel1 from "../../assets/Men/Denim/athleteModel1.jpg";
import athleteHover1 from "../../assets/Men/Denim/athleteHover1.jpg";
import athleteModel2 from "../../assets/Men/Denim/athleteModel2.jpg";
import athleteHover2 from "../../assets/Men/Denim/athleteHover2.jpg";
import athleteLast from "../../assets/Men/Denim/athleteLast.jpg";

import skinnyOrganicModel1 from "../../assets/Men/Denim/skinnyOrganicModel1.jpg";
import skinnyOrganicModel2 from "../../assets/Men/Denim/skinnyOrganicModel2.jpg";
import skinnyOrganicModel3 from "../../assets/Men/Denim/skinnyOrganicModel3.jpg";
import skinnyOrganicHover1 from "../../assets/Men/Denim/skinnyOrganicHover1.jpg";
import skinnyOrganicHover2 from "../../assets/Men/Denim/skinnyOrganicHover2.jpg";
import skinnyOrganicHover3 from "../../assets/Men/Denim/skinnyOrganicHover3.jpg";
import DenimSlider from "../../components/Denim/DenimSlider";

import slimFit1 from "../../assets/Men/Denim/slimFit1.jpg";
import slimFit2 from "../../assets/Men/Denim/slimFit2.jpg";
import slimFitHover1 from "../../assets/Men/Denim/slimFitHover1.jpg";
import slimFitHover2 from "../../assets/Men/Denim/slimFitHover2.jpg";

import athleticFit1 from "../../assets/Men/Denim/athleticFit1.jpg";
import athleticFit2 from "../../assets/Men/Denim/athleticFit2.jpg";
import athleticFitHover1 from "../../assets/Men/Denim/athleticFitHover1.jpg";
import athleticFitHover2 from "../../assets/Men/Denim/athleticFitHover2.jpg";

import skinnyFitJean1 from "../../assets/Men/Denim/skinnyFitJean1.jpg";
import skinnyFitJean2 from "../../assets/Men/Denim/skinnyFitJean2.jpg";
import skinnyFitJeanHover1 from "../../assets/Men/Denim/skinnyFitJeanHover1.jpg";
import skinnyFitJeanHover2 from "../../assets/Men/Denim/skinnyFitJeanHover2.jpg";
import skinnyFitJean3 from "../../assets/Men/Denim/skinnyFitJean3.jpg";

import denimJacket2 from "../../assets/Men/Denim/denimJacket222.jpg";
import denimJacket1 from "../../assets/Men/Denim/denimJacket111.jpg";
import denimJacketHover2 from "../../assets/Men/Denim/denimJacketHover2.jpg";
import denimJacketHover1 from "../../assets/Men/Denim/denimJacketHover1.jpg";
import LaundryFoo from "../../components/LaundryFoo/LaundryFoo";
import FooMain from "../../components/FooMain";

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
  useEffect(() => {
    dispatch(setSubtotal(0));
  }, []);
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
  const dispatch = useDispatch();

  if (loading) {
    return null;
  } else {
    dispatch(fetchDbData(data));
  }

  if (error) return `Something went wrong: ${error}`;

  return (
    <>
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
            subheader=""
            header={data.denims[0].header}
            title={data.denims[0].title}
            subtitle={data.denims[0].subtitle}
            price={data.denims[0].price}
            img1={DenimModel1}
            img1Hover={HoverModel1}
            img2={DenimModel2}
            img2Hover={HoverModel2}
            id={data.denims[0].id}
          />
          <DenimCardContainer2
            subheader={data.denims[2].subheader}
            header={data.denims[2].header}
            title={data.denims[2].title}
            subtitle={data.denims[2].subtitle}
            price={data.denims[2].price}
            img1={Slim4watModel1}
            img1Hover={Slim4watModel1Hover}
            img2={Slim4watModel2}
            img2Hover={Slim4watModel2Hover}
            img3={Slim4wayImg3}
            id={data.denims[2].id}
          />
          <DenimCardContainer2
            subheader={data.denims[1].subheader}
            header={data.denims[1].header}
            title={data.denims[1].title}
            subtitle={data.denims[1].subtitle}
            price={data.denims[1].price}
            img1={relax4WayModel1}
            img1Hover={relax4WayHover1}
            img2={relax4WayModel2}
            img2Hover={relax4WayHover2}
            img3={relax4WayLast}
            id={data.denims[1].id}
          />
          <DenimCardContainer2
            subheader={data.denims[3].subheader}
            header={data.denims[3].header}
            title={data.denims[3].title}
            subtitle={data.denims[3].subtitle}
            price={data.denims[3].price}
            img1={athleteModel1}
            img1Hover={athleteHover1}
            img2={athleteModel2}
            img2Hover={athleteHover2}
            img3={athleteLast}
            id={data.denims[3].id}
          />

          <DenimCardContainer
            subheader={data.denims[4].subheader}
            header={data.denims[4].header}
            title={data.denims[4].title}
            subtitle={data.denims[4].subtitle}
            price={data.denims[4].price}
            img1={skinnyOrganicModel1}
            img1Hover={skinnyOrganicHover1}
            img2={skinnyOrganicModel2}
            img2Hover={skinnyOrganicHover2}
            img3={skinnyOrganicModel3}
            img3Hover={skinnyOrganicHover3}
            id={data.denims[4].id}
          />

          <DenimSlider />

          <DenimCardContainer
            subheader={data.denims[5].subheader}
            header={data.denims[5].header}
            title={data.denims[5].title}
            subtitle={data.denims[5].subtitle}
            price={data.denims[5].price}
            img1={slimFit1}
            img1Hover={slimFitHover1}
            img2={slimFit2}
            img2Hover={slimFitHover2}
            img3={""}
            img3Hover={""}
            id={data.denims[5].id}
          />
          <DenimCardContainer
            subheader={data.denims[6].subheader}
            header={data.denims[6].header}
            title={data.denims[6].title}
            subtitle={data.denims[6].subtitle}
            price={data.denims[6].price}
            img1={athleticFit1}
            img1Hover={athleticFitHover1}
            img2={athleticFit2}
            img2Hover={athleteHover2}
            img3={""}
            img3Hover={""}
          />
          <DenimCardContainer2
            subheader={data.denims[7].subheader}
            header={data.denims[7].header}
            title={data.denims[7].title}
            subtitle={data.denims[7].subtitle}
            price={data.denims[7].price}
            img1={skinnyFitJean1}
            img1Hover={skinnyFitJeanHover1}
            img2={skinnyFitJean2}
            img2Hover={skinnyFitJeanHover2}
            img3={skinnyFitJean3}
            id={data.denims[7].id}
          />
          <DenimCardContainer
            subheader={data.denims[8].subheader}
            header={data.denims[8].header}
            title={data.denims[8].title}
            subtitle={data.denims[8].subtitle}
            price={data.denims[8].price}
            img1={denimJacket1}
            img1Hover={denimJacketHover1}
            img2={denimJacket2}
            img2Hover={denimJacketHover2}
            img3={""}
            img3Hover={""}
            id={data.denims[8].id}
          />

          <LaundryFoo />
        </section>
      </div>
      <FooMain />
    </>
  );
};

export default React.memo(Denim);
