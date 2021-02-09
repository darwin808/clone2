import "./CartModalBody.scss";

import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteItemCart, setSubtotal } from "../../../Actions/Actions";

function CartModalBody({ id, title, price, quantity, img, setQty }) {
  const Subtotal = useSelector((e) => e.SubtotalReducer);
  const dispatch = useDispatch();
  useEffect(() => {
    setitemQuantity(quantity);
  }, [quantity]);
  const [itemQuantity, setitemQuantity] = useState(0);
  const removeItem = () => {
    setitemQuantity(0);
    console.log(id);
    dispatch(deleteItemCart(id));
    dispatch(setSubtotal(0));
    console.log(Subtotal.state);
  };
  const minusItem = () => {
    setitemQuantity(itemQuantity - 1);
  };
  const addItem = () => {
    setitemQuantity(itemQuantity + 1);
  };
  return (
    <>
      {itemQuantity !== 0 && (
        <div className="CartModalBody">
          <div className="top">
            <div className="left">
              <img src={img} alt="qweq" />
            </div>
            <div className="right">
              <div className="rightItems">
                <p className="paraHead">{title}</p>
                <p className="paraBody">Size: Size 38x38</p>
                <p className="paraBody">Color: Indigo Rinse</p>
              </div>
            </div>
            <div className="closeBtn">
              <p className="x" onClick={removeItem}>
                X
              </p>
            </div>
          </div>
          <div className="bottom">
            <div className="left"></div>
            <div className="right">
              <div className="btn">
                {" "}
                <h4 onClick={minusItem}>-</h4>{" "}
                <h4 id="qty"> {itemQuantity} </h4>
                <h4 onClick={addItem}>+</h4>
              </div>
              <div className="price">P{price}</div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default React.memo(CartModalBody);
