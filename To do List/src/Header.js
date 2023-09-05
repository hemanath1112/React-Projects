import React from "react";
import "./Header.css";

const Header = ({ title }) => {
  return (
    <div className="header">
      <h2 className="header__title">{title}</h2>
    </div>
  );
};

Header.defaultProps = {
  title: "T0 Do List",
};

export default Header;
