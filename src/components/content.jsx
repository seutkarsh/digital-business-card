import React from "react";
import ButtonContent from "../components/buttonContent";
import About from "../components/about";
import Interests from "../components/interests";

export default () => {
  return (
    <div className="content">
      <span className="content--name">Laura Smith</span>
      <span className="content--post">Frontend Developer</span>
      <span className="content--website">laurasmith.website</span>
      <ButtonContent />
      <About />
      <Interests />
    </div>
  );
};
