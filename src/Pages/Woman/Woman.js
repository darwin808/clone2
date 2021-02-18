import React, { useState, useEffect } from "react";
import "./Woman.scss";
import { useSelector } from "react-redux";
import _ from "lodash";
function Woman() {
  const [check, setcheck] = useState("");
  const [collect, setcollect] = useState([]);
  const Woman = useSelector((e) => e.WomanDenimReducer.WomenDenim);
  useEffect(() => {
    // console.log(Woman);
  });

  const addder = (item) => {
    collect.includes(item)
      ? collect.filter((e) => e !== item)
      : setcollect([...collect, item]);

    console.log(collect);
  };
  const del = (name) => {
    const newarr = collect.filter((e) => e !== name);
    setcollect(newarr);
  };
  return (
    <div className="Woman">
      <input
        type="checkbox"
        onChange={() => {
          addder("slim");
        }}
      />{" "}
      slim
      <input
        type="checkbox"
        onChange={() => {
          addder("curvy");
        }}
      />{" "}
      curby
      <input
        type="checkbox"
        onChange={() => {
          addder("skinny");
        }}
      />{" "}
      skinny
      <input
        type="checkbox"
        onChange={() => {
          addder("fatty");
        }}
      />
      fatty
      <div>
        {collect.map((e) => (
          <button onClick={() => del(e)}>{e} X</button>
        ))}
      </div>
      {Woman.filter((e) => collect.includes(e.style)).map((e) => (
        <div>{e.name}</div>
      ))}
    </div>
  );
}

export default Woman;
