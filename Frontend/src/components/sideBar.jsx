import { useState } from "react";
import { Link } from "react-router-dom";
import "./styles/sidebar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChartLine, faIdCard, faBookOpen, faUsers } from "@fortawesome/free-solid-svg-icons";

const Sidebar = () => {
  const [activeLink, setActiveLink] = useState("Dashboard");

  const handleActiveLink = (text) => {
    setActiveLink(text);
    console.log(activeLink);
  };

  return (
    <div className="sidebar">
      <ul>
        <li>
          <FontAwesomeIcon icon={faChartLine} />
          <Link to="/" onClick={() => handleActiveLink("Dashboard")}>Dashboard</Link>
        </li>
        <li>
          <FontAwesomeIcon icon={faIdCard} />
          <Link to="/issue-return" onClick={() => handleActiveLink("Issue/Return")}>Issue/Return</Link>
        </li>
        <li>
          <FontAwesomeIcon icon={faBookOpen} />
          <Link to="/books" onClick={() => handleActiveLink("Books")}>Books</Link>
        </li>
        <li>
          <FontAwesomeIcon icon={faUsers} />
          <Link to="/users" onClick={() => handleActiveLink("Users")}>Users</Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
