import React, { useState } from "react";
import {
  BsGrid1X2Fill,
  BsPeopleFill,
  BsListCheck,
  BsMenuButtonWideFill,
  BsFillGearFill,
  BsArrowLeftRight,
} from "react-icons/bs";
import { IoLibrarySharp, IoArrowBack } from "react-icons/io5";
import { CiUser } from "react-icons/ci";
import "./styles/sidebar.css";

function Sidebar({ openSidebarToggle, OpenSidebar, handleActiveChange }) {
  const [selectedItem, setSelectedItem] = useState("Dashboard");

  const handleItemClick = (itemName) => {
    handleActiveChange(itemName);
    setSelectedItem(itemName);
  };

  const category = "admin";

  return (
    <aside
      id="sidebar"
      className={openSidebarToggle ? "sidebar-responsive" : ""}
    >
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
        <li
          className={`sidebar-list-item ${
            selectedItem === "Dashboard" ? "selected" : ""
          }`}
          onClick={() => handleItemClick("Dashboard")}
        >
          <BsGrid1X2Fill className="icon" /> Dashboard
        </li>
        <li
          className={`sidebar-list-item ${
            selectedItem === "Issue/Return" ? "selected" : ""
          }`}
          onClick={() => handleItemClick("Issue/Return")}
        >
          <BsArrowLeftRight className="icon" /> Issue/Return
        </li>
        <li
          className={`sidebar-list-item ${
            selectedItem === "Readers" ? "selected" : ""
          }`}
          onClick={() => handleItemClick("Readers")}
        >
          <BsPeopleFill className="icon" /> Readers
        </li>
        <li
          className={`sidebar-list-item ${
            selectedItem === "Books" ? "selected" : ""
          }`}
          onClick={() => handleItemClick("Books")}
        >
          <BsListCheck className="icon" /> Books
        </li>
        {/* <li
          className={`sidebar-list-item ${
            selectedItem === "Reports" ? "selected" : ""
          }`}
          onClick={() => handleItemClick("Reports")}
        >
          <BsMenuButtonWideFill className="icon" /> Reports
        </li> */}
        <li
          className={`sidebar-list-item ${
            selectedItem === "Setting" ? "selected" : ""
          }`}
          onClick={() => handleItemClick("Settings")}
        >
          <BsFillGearFill className="icon" /> Settings
        </li>
        {category === "admin" && (
          <li
            className={`sidebar-list-item ${
              selectedItem === "Users" ? "selected" : ""
            }`}
            onClick={() => handleItemClick("Admin")}
          >
            <CiUser className="icon" /> Librarians
          </li>
        )}
      </ul>
    </aside>
  );
}

export default Sidebar;
