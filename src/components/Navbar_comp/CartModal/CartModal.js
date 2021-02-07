import React, { useState } from "react";
import "./CartModal.scss";
import { useSelector, useDispatch } from "react-redux";
import CartModalBody from "./CartModalBody";

function CartModal() {
  const Cart = useSelector((e) => e.CartReducer.cart);
  const MiniImg = useSelector((e) => e.MiniMenImgReducer.MiniMenImg);
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
  const item4Quantity = Cart.filter((e) => e.id === item4Id).length;
  const item5Quantity = Cart.filter((e) => e.id === item5Id).length;
  const item6Quantity = Cart.filter((e) => e.id === item6Id).length;
  const item7Quantity = Cart.filter((e) => e.id === item7Id).length;
  const item8Quantity = Cart.filter((e) => e.id === item8Id).length;
  const item9Quantity = Cart.filter((e) => e.id === item9Id).length;

  const arr = [
    {
      title: "The Selvedge Slim Fit Jean",
      quantity: item1Quantity,
      price: 4400,
      id: item1Id,
      img: MiniImg[0],
    },
    {
      title: "Best Seller: The Slim 4-Way Stretch Organic Jean | Uniform",
      quantity: item2Quantity,
      price: 3600,
      id: item2Id,
      img: MiniImg[1],
    },
    {
      title: "The Relaxed 4-Way Stretch Organic Jean | Uniform",
      quantity: item3Quantity,
      price: 3600,
      id: item3Id,
      img: MiniImg[2],
    },
    {
      title: "The Athletic 4-Way Stretch Organic Jean | Uniform",
      quantity: item4Quantity,
      price: 4400,
      id: item4Id,
      img: MiniImg[3],
    },
    {
      title: "The Skinny 4-Way Stretch Organic Jean | Uniform",
      quantity: item5Quantity,
      price: 3600,
      id: item5Id,
      img: MiniImg[4],
    },
    {
      title: "The Slim Fit Jean",
      quantity: item6Quantity,
      price: 3600,
      id: item6Id,
      img: MiniImg[5],
    },
    {
      title: "The Athletic Fit Jean",
      quantity: item7Quantity,
      price: 4400,
      id: item7Id,
      img: MiniImg[6],
    },
    {
      title: "The Skinny Fit Jean",
      quantity: item8Quantity,
      price: 3600,
      id: item8Id,
      img: MiniImg[7],
    },
    {
      title: "The Denim Jacket",
      quantity: item9Quantity,
      price: 3600,
      id: item9Id,
      img: MiniImg[8],
    },
  ];
  return (
    <div className="CartModal">
      <div className="headModal">
        <p className="header">Your Bag</p>
      </div>
      <div className="bodyModalContainer">
        {Cart.length > 0 ? (
          arr.map((e) => (
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
        )}
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

export default React.memo(CartModal);
