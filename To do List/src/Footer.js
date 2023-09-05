import React from "react";
import "./Footer.css";

const Footer = ({ length }) => {
  return (
    <div className="footer">
      <p className="footer__content">
        {length} List {length === 1 ? "item" : "items"}
      </p>
    </div>
  );
};

export default Footer;
