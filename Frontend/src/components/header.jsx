import { useState } from "react";
import { BsPersonCircle } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import "./styles/header.css";

function Header({ OpenSidebar }) {
  const [dropdown, setDropdown] = useState(false);
  const name = localStorage.getItem("name");
  const token = localStorage.getItem("token");
  const handleDropdown = () => {
     setDropdown(!dropdown);
  };

  const navigate = useNavigate();

  const logout = () => {
    localStorage.clear();
    navigate("/lms");
  };

  return (
    <header className="header">
      <div className="header-left"></div>
      <div className="header-right">
        <span>{name}</span>
        <BsPersonCircle className="header-left-icon" onClick={handleDropdown} />
        {dropdown && (
          <div className="dropdown">
            <span onClick={logout}>Log Out</span>
          </div>
        )}
      </div>
    </header>
  );
}

export default Header;
