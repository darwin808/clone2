import React from "react";
import "./CartModal.scss";
import { useSelector, useDispatch } from "react-redux";

function CartModal() {
  const Cart = useSelector((e) => e.CartReducer.cart);

  const DbData = useSelector((e) => e.DbDataReducer.DbData[0]);

  const item1Id = "d078cc97-f227-4261-bbe9-473ac8be364b";
  const item2Id = "536398eb-3536-43b0-ac19-bdcaf94f7ffa";
  const item3Id = "3293dfc5-3ccb-478c-8671-e90cfbd52c78";
  const item4Id = "605b1ffb-71b6-4c75-822c-55186d864c63";
  const item5Id = "c358645c-1c27-4b55-b9ec-702d0844757b";
  const item6Id = "c32baed7-5207-48de-a0af-5f82c641ca3f";
  const item7Id = "b2baa1cc-9cf1-46cf-816d-b8655f04f9c6";
  const item8Id = "6b9de864-bbc4-447c-b1d0-19fd2585b9af";
  const item9Id = "478acba5-7f11-4887-8455-7fd226b046df";

  const item1Quantity = Cart.filter((e) => e.id === item1Id).length;
  const item2Quantity = Cart.filter((e) => e.id === item2Id).length;
  const item3Quantity = Cart.filter((e) => e.id === item3Id).length;

  const arr = [
    {
      title: "The Selvedge Slim Fit Jean",
      quantity: item1Quantity,
      price: 4400,
      id: item1Id,
    },
    {
      title: "Best Seller: The Slim 4-Way Stretch Organic Jean | Uniform",
      quantity: item2Quantity,
      price: 3600,
      id: item2Id,
    },
    {
      title: "The Relaxed 4-Way Stretch Organic Jean | Uniform",
      quantity: item3Quantity,
      price: 3600,
      id: item3Id,
    },
  ];
  return (
    <div className="CartModal">
      <div className="headModal">
        <p className="header">Your Bag</p>
      </div>
      <div className="bodyModalContainer">
        {arr.map((e) => (
          <div key={e.id}>
            {e.title} - {e.quantity}
          </div>
        ))}
      </div>
      <div className="fooModal">
        <p className="para1">
          Sign up your 10% off your first order. Valid within
        </p>
        <p className="para2">two days of signup</p>
        <div className="btn">Continue to Checkout</div>
      </div>
    </div>
  );
}

export default CartModal;
