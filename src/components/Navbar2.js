import React, { useState, useEffect, useMemo } from "react";
import "./Navbar2.scss";
import WomenTab from "./Navbar_comp/WomenTab";

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
  const [scrollerX, scrollerY] = useScroll();
  const [scrolly, setScrolly] = useState("");
  const [setter, setsetter] = useState();
  const [scrolldown, setscrolldown] = useState(false);
  const [women, setwomen] = useState(false);
  const changebg = useMemo(() => {
    setScrolly(window.scrollY);
    console.log(scrollerY);
    scrollerY >= 50 ? setscrolldown(true) : setscrolldown(false);
  }, [scrollerY]);
  window.addEventListener("scroll", changebg);

  const womenhover = () => {
    setwomen(!women);
  };
  return (
    <div className={!scrolldown ? "navbar2" : "navbar2 active"}>
      <div className="leftnav">
        <p className="leftitems" onClick={womenhover}>
          Women
          {women && (
            <div className="WomenChild">
              <WomenTab />
            </div>
          )}
        </p>
        <p className="leftitems">Men</p>
        <p className="leftitems">Denim</p>
        <p className="leftitems">About </p>
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
