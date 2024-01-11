import React from "react";
import emailIcon from "../images/Mail.svg";
import linkedinIcon from "../images/linkedin.svg";

export default () => {
  return (
    <div className="button-content">
      <div className="button-email">
        <img src={emailIcon} />
        <span>Email</span>
      </div>
      <div className="button-linkedin">
        <img src={linkedinIcon} />
        <span>LinkedIn</span>
      </div>
    </div>
  );
};
