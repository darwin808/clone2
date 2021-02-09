import "./Login.scss";
import React from "react";
import fbIco from "../assets/faceIco.png";
import gIco from "../assets/googleIco.jpg";

function Login() {
  return (
    <div className="Login">
      <div className="topHeader">
        <div className="item1Container">
          <div className="item1">
            <p className="num1">1</p>
          </div>
          <p className="accnt">ACCOUNT</p>
        </div>
        <div className="item2Container">
          <div className="item2">
            <p className="num1">2</p>
          </div>
          <p className="shipping">SHIPPING</p>
        </div>{" "}
        <div className="item3Container">
          <div className="item3">
            <p className="num1">3</p>
          </div>
          <p className="billing">BILLING</p>
        </div>{" "}
        <div className="item4Container">
          <div className="item4">
            <p className="num1">4</p>
          </div>
          <p className="review">REVIEW</p>
        </div>
      </div>
      <div className="cardLogin">
        <p className="para1Login">Welcome!</p>
        <p className="para2Login">Please enter your email address</p>
        <div className="inputLogin">
          <p className="emailAddDesc">EMAIL ADDRESS</p>
          <input type="text" placeholder="annie@email.com" />
        </div>
        <div className="submitLogin"> CONTINUE</div>

        <p className="para3">Or continue with</p>

        <div className="socLinkBtn">
          <div className="googleLogin">
            <img src={gIco} alt="qweq" />
            <p>GOOGLE</p>
          </div>
          <div className="fbLogin">
            <img src={fbIco} alt="adad" /> <p>FACEBOOK</p>{" "}
          </div>
        </div>
        <p className="para4">
          Offer does not apply to purchases of gift cards and already discounted{" "}
          <br />
          items--excludes tax, shipping, and any additional fees.
          <br /> Offer valid until two days after signup.
        </p>
        <p className="para5">
          By providing your email address, you agree to our <br />
          <u>Privacy Policy</u> and <u>Terms of Service</u>.
        </p>
      </div>
    </div>
  );
}

export default Login;
