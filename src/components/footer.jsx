import React from "react";
import twitter from "../images/twitter.svg";
import facebook from "../images/facebook.svg";
import github from "../images/github.svg";
import ig from "../images/ig.png";

export default () => {
  return (
    <div className="content--footer">
      <img src={twitter} alt="" />
      <img src={facebook} alt="" />
      <img src={ig} alt="" />
      <img src={github} alt="" />
    </div>
  );
};
