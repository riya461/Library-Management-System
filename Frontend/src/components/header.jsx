import React from "react";
import { BsPersonCircle, BsJustify } from "react-icons/bs";
import "./styles/header.css";
function Header({ OpenSidebar }) {
  const user=localStorage.getItem("userid");
  return (
    <header className="header">
      <div className="header-left"></div>
      <div className="header-right">
        <span>{user}</span>
        <BsPersonCircle className="header-left-icon" />
      </div>
    </header>
  );
}

export default Header;