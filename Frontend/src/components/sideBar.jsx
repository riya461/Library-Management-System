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
        <li className="sidebar-list-item">
          <BsGrid1X2Fill
            className="icon"
            onClick={() => handleActiveChange("Dashboard")}
          />{" "}
          Dashboard
        </li>
        <li className="sidebar-list-item">
          <a href="">
            <BsArrowLeftRight
              className="icon"
              onClick={() => handleActiveChange("Issue/Return")}
            />{" "}
            Issue/Return
          </a>
        </li>
        <li className="sidebar-list-item">
          <a href="">
            <BsPeopleFill
              className="icon"
              onClick={() => handleActiveChange("Readers")}
            />{" "}
            Readers
          </a>
        </li>
        <li className="sidebar-list-item">
          <a href="">
            <BsListCheck
              className="icon"
              onClick={() => handleActiveChange("Books")}
            />{" "}
            Books
          </a>
        </li>
        <li className="sidebar-list-item">
          <a href="">
            <BsMenuButtonWideFill
              className="icon"
              onClick={() => handleActiveChange("Reports")}
            />{" "}
            Reports
          </a>
        </li>
        <li className="sidebar-list-item">
          <a href="">
            <BsFillGearFill
              className="icon"
              onClick={() => handleActiveChange("Setting")}
            />{" "}
            Setting
          </a>
        </li>
      </ul>
    </aside>
  );
}

export default Sidebar;
