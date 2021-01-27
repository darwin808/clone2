import React, { useState, useEffect, useMemo } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./Navbar2.scss";
import WomenTab from "./Navbar_comp/WomenTab";
import MenTab from "./Navbar_comp/MenTab";
import {
  trueWomen,
  falseWomen,
  trueMen,
  falseMen,
  trueDenim,
  falseDenim,
  trueAbout,
  falseAbout,
} from "../Actions/Actions";
import WomenReducer from "../Reducers/WomenReducer";
import DenimTab from "./Navbar_comp/DenimTab";
import AboutTab from "./Navbar_comp/AboutTab";

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

function Navbar2() {
  const ShowManTab = useSelector((e) => e.MenReducer);
  const ShowWomanTab = useSelector((e) => e.WomenReducer);
  const ShowDenimTab = useSelector((e) => e.DenimReducer);
  const ShowAboutTab = useSelector((e) => e.AboutReducer);
  const dispatch = useDispatch();
  const [scrollerX, scrollerY] = useScroll();
  const [scrolly, setScrolly] = useState("");
  const [setter, setsetter] = useState(true);
  const [scrolldown, setscrolldown] = useState(false);
  const [women, setwomen] = useState(false);
  const [modalMen, setmodalMen] = useState(false);

  const changebg = useMemo(() => {
    setScrolly(window.scrollY);
    // console.log(scrollerY);
    scrollerY >= 50 ? setscrolldown(true) : setscrolldown(false);
  }, [scrollerY]);
  window.addEventListener("scroll", changebg);

  const womenhover = () => {
    dispatch(trueWomen());
    dispatch(falseMen());
    dispatch(falseDenim());
    dispatch(falseAbout());
  };

  const menHover = () => {
    dispatch(trueMen());
    dispatch(falseWomen());
    dispatch(falseDenim());
    dispatch(falseAbout());
  };

  const closewomen = () => {
    setwomen(!women);
    setsetter(!setter);
  };

  const denimHover = () => {
    dispatch(trueDenim());
    dispatch(falseMen());
    dispatch(falseWomen());
    dispatch(falseAbout());
  };

  const aboutHover = () => {
    dispatch(trueAbout());
    dispatch(falseDenim());
    dispatch(falseMen());
    dispatch(falseWomen());
  };
  return (
    <div className={!scrolldown ? "navbar2" : "navbar2 active"}>
      <div className="leftnav">
        <p className="leftitems" onMouseEnter={womenhover}>
          Women
          {ShowWomanTab && (
            <div className="WomenChild">
              <WomenTab />
            </div>
          )}
        </p>
        <p className="leftitems" onMouseEnter={menHover}>
          Men
          {ShowManTab && <MenTab />}
        </p>
        <p className="leftitems" onMouseEnter={denimHover}>
          Denim {ShowDenimTab && <DenimTab />}
        </p>
        <p className="leftitems" onMouseEnter={aboutHover}>
          About {ShowAboutTab && <AboutTab />}{" "}
        </p>
      </div>
      <div className="centernav">EVERLANE</div>
      <div className="rightnav">
        <div className="rightitems">Seach</div>
        <div className="rightitems">Log In</div>
        <div className="rightitems">Sign Up</div>
        <div className="rightitems">
          <i class="fas fa-shopping-cart fa-lg"></i>
        </div>
      </div>
    </div>
  );
}

export default Navbar2;
