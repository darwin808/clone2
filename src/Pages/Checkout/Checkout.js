import "./Checkout.scss";
import { useSelector, useDispatch } from "react-redux";
import React, { useState } from "react";
import CartModalBody from "../../components/Navbar_comp/CartModal/CartModalBody";
import { useEffect } from "react";
import { setSubtotal } from "../../Actions/Actions";

import { useHistory } from "react-router-dom";
function Checkout() {
  // const [Subtotal, setSubtotal] = useState(0);
  const history = useHistory();
  const dispatch = useDispatch();
  const Subtotal = useSelector((e) => e.SubtotalReducer);
  useEffect(() => {
    SubtotalFunc();
  }, []);

  const SubtotalFunc = () => {
    const x = CheckOutCart1[0]
      .map((e) => e.price * e.quantity)
      .reduce((a, b) => a + b);
    dispatch(setSubtotal(x));
  };
  const gotoregister = () => {
    history.push("/register");
  };
  const CheckOutCart1 = useSelector((e) => e.CheckOutCartReducer.CheckOutCart);
  return (
    <div className="Checkout">
      <div className="topCheckOut">
        <div className="leftCheckout">
          <div className="headerLeft">
            <i class="fas fa-arrow-left"></i> Back to Shopping
          </div>
          <div className="itemsBodyLeft">
            {CheckOutCart1.length > 0 ? (
              CheckOutCart1[0].map((e) => (
                <CartModalBody
                  id={e.id}
                  title={e.title}
                  quantity={e.quantity}
                  price={e.price}
                  img={e.img}
                />
              ))
            ) : (
              <p>You have no items in your bag.</p>
            )}{" "}
          </div>
        </div>
        <div className="rightCheckout">
          <div className="rightheader">
            <p>Order Summary</p>
          </div>
          <div className="items">
            <p className="leftitems">Subtotal</p>{" "}
            <p className="rightitems">P{Subtotal.state}</p>
          </div>
          <div className="items">
            <p className="leftitems">Estimated Shipping</p>
            <p className="rightitems">P800</p>
          </div>
          <div className="items">
            <p className="leftitems">Estimated Duties</p>
            <p className="rightitems">
              P{(Subtotal.state * 0.0634).toFixed(2)}
            </p>
          </div>
          <div className="items">
            <p className="leftitems">Estimated Tax</p>
            <p className="rightitems">P{(Subtotal.state * 0.078).toFixed(2)}</p>
          </div>
          <div className="items">
            <p className="leftitems" id="total">
              Estimated Total
            </p>
            <p className="rightitems" id="total">
              P
              {Subtotal.state +
                Subtotal.state * 0.0634 +
                Subtotal.state * 0.078}
            </p>
          </div>
          <div className="itemDesc">
            <p className="center">
              Duties, Tax, and Shipping are estimated for Philippines
            </p>
          </div>
          <div className="btn" onClick={gotoregister}>
            CONTINUE TO CHECKOUT
          </div>
        </div>
      </div>
      <div className="mid">xx</div>
    </div>
  );
}

export default React.memo(Checkout);
