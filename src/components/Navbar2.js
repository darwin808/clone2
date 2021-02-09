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
import DenimTab from "./Navbar_comp/DenimTab";
import AboutTab from "./Navbar_comp/AboutTab";
import CartModal from "./Navbar_comp/CartModal/CartModal";
import { useHistory } from "react-router-dom";
import CartReducer from "../Reducers/CartReducer";

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

function useWindow() {
  const [size, setsize] = useState([window.innerWidth, window.innerHeight]);
  useEffect(() => {
    const handleresize = () => {
      setsize([window.innerWidth, window.innerHeight]);
    };
    window.addEventListener("resize", handleresize);
  }, []);
  return size;
}
//////////////////////////////////////////////////////////////////////////////////////
function Navbar2() {
  const history = useHistory();
  const ShowManTab = useSelector((e) => e.MenReducer);
  const ShowWomanTab = useSelector((e) => e.WomenReducer);
  const ShowDenimTab = useSelector((e) => e.DenimReducer);
  const ShowAboutTab = useSelector((e) => e.AboutReducer);
  const dispatch = useDispatch();
  const cart = useSelector((e) => e.CartReducer.cart);
  const [showCartModal, setshowCartModal] = useState(false);
  const [scrollerX, scrollerY] = useScroll();
  const [scrolly, setScrolly] = useState("");
  const [scrolldown, setscrolldown] = useState(false);

  const changebg = useMemo(() => {
    setScrolly(window.scrollY);
    // console.log(scrollerY);
    scrollerY >= 30 ? setscrolldown(true) : setscrolldown(false);
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

  // const closewomen = () => {
  //   setwomen(!women);
  //   setsetter(!setter);
  // };

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

  const openCartModal = () => {
    setshowCartModal(true);
  };

  const closeCartModal = () => {
    setshowCartModal(false);
  };

  useEffect(() => {
    console.log(window.location.href);
  });
  return (
    <div
      className={!scrolldown ? "navbar2" : "navbar2 active"}
      style={{
        backgroundColor: `${
          window.location.href === "http://localhost:3000/men" ? "none" : "none"
        }`,
        color: "grey",
      }}>
      {showCartModal && (
        <div className="CartModal" onMouseLeave={closeCartModal}>
          <CartModal />
        </div>
      )}

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
          About
          {ShowAboutTab && <AboutTab />}{" "}
        </p>
      </div>
      <div className="centernav" onClick={() => history.push("/")}>
        EVERLANE
      </div>
      <div className="rightnav">
        <div className="rightitems">Seach</div>
        <div className="rightitems">Log In</div>
        <div className="rightitems">Sign Up</div>
        <div className="rightitems" id="cartIco">
          <i
            onMouseEnter={openCartModal}
            class="fas fa-shopping-cart fa-lg"
            id="cartIcon"></i>

          {cart.length > 0 ? (
            <div className="cartItems">{cart.length}</div>
          ) : null}
        </div>
      </div>
    </div>
  );
}

export default React.memo(Navbar2);
