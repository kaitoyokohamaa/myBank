import React from "react";
import Header from "../../organisms/Header";
import Logo from "../../../Img/logo.png";
export default function index() {
  return (
    <div>
      <Header />
      <img src={Logo} />
    </div>
  );
}
