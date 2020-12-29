import React from "react";
import Header from "../../organisms/Header";
import Logo from "../../../Img/logo.png";
export default function index() {
  return (
    <div>
      <Header />
      <div>
        <img src={Logo} />
      </div>
      <div>
        <p>私は節約の勇者</p>
        <p>節約のコツを教えよう</p>
      </div>
    </div>
  );
}
