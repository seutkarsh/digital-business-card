import React from "react";
import personImage from "../images/person.png";
import Content from "../components/content";
import Footer from "../components/footer";

export default () => {
  return (
    <div className="card">
      <img className="card--image" src={personImage} />
      <Content />
      <Footer />
    </div>
  );
};
