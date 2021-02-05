import React from "react";
import "./FooMain.scss";
import S5Foo2 from "./Section5_comp/S5Foo2";
import S5LeftFoo1 from "./Section5_comp/S5LeftFoo1";
import S5RightFoo1 from "./Section5_comp/S5RightFoo1";
function FooMain() {
  return (
    <div className="FooMain">
      <div className="S5Foo1">
        <S5LeftFoo1 />
        <S5RightFoo1 />
      </div>
      <S5Foo2 />
    </div>
  );
}

export default FooMain;
