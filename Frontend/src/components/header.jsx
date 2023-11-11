import React from "react";
import { BsPersonCircle, BsJustify } from "react-icons/bs";
import "./styles/header.css";
function Header({ OpenSidebar }) {
  return (
    <header className="header">
      <div className="menu-icon">
        <BsJustify className="icon" onClick={OpenSidebar} />
      </div>
      <div className="header-left"></div>
      <div className="header-right">
        <BsPersonCircle className="header-left-icon" />
      </div>
    </header>
  );
}

export default Header;
