import React from "react";
import {
  BsGrid1X2Fill,
  BsPeopleFill,
  BsListCheck,
  BsMenuButtonWideFill,
  BsFillGearFill,
  BsArrowLeftRight,
} from "react-icons/bs";
import { IoLibrarySharp, IoArrowBack } from "react-icons/io5";
import "./styles/sidebar.css";



function Sidebar({ openSidebarToggle, OpenSidebar, handleActiveChange }) {
  const handleItemClick = (itemName) => {
    handleActiveChange(itemName);
  };

  return (
    <aside id="sidebar" className={openSidebarToggle ? "sidebar-responsive" : ""}>
      <div className="sidebar-title">
        {openSidebarToggle && (
          <span className="icon back-arrow" onClick={OpenSidebar}>
            <IoArrowBack />
          </span>
        )}
      </div>
      <div className="sidebar-brand">
        <IoLibrarySharp className="icon_header" /> LIBRARY
      </div>
      <ul className="sidebar-list">
        <li className="sidebar-list-item" onClick={() => handleItemClick("Dashboard")}>
          <BsGrid1X2Fill className="icon" /> Dashboard
        </li>
        <li className="sidebar-list-item" onClick={() => handleItemClick("Issue/Return")}>
          <BsArrowLeftRight className="icon" /> Issue/Return
        </li>
        <li className="sidebar-list-item" onClick={() => handleItemClick("Readers")}>
          <BsPeopleFill className="icon" /> Readers
        </li>
        <li className="sidebar-list-item" onClick={() => handleItemClick("Books")}>
          <BsListCheck className="icon" /> Books
        </li>
        <li className="sidebar-list-item" onClick={() => handleItemClick("Reports")}>
          <BsMenuButtonWideFill className="icon" /> Reports
        </li>
        <li className="sidebar-list-item" onClick={() => handleItemClick("Setting")}>
          <BsFillGearFill className="icon" /> Setting
        </li>
      </ul>
    </aside>
  );
}

export default Sidebar;

