import React, { useState } from "react";
import "./styles/landing.css";
import Header from "../components/header";
import Sidebar from "../components/sideBar";
import Dashboard from "../components/dashboard";
import Booklist from "../components/booklist";
import IssueReturn from "../components/issueReturn";

function App() {
  const [openSidebarToggle, setOpenSidebarToggle] = useState(false);
  const [active, setActive] = useState("Dashboard");

  const handleActiveChange = (active) => {
    setActive(active);
  };

  const OpenSidebar = () => {
    setOpenSidebarToggle(!openSidebarToggle);
  };

  return (
    <div className="grid-container">
      <Header OpenSidebar={OpenSidebar} />
      <Sidebar
        openSidebarToggle={openSidebarToggle}
        OpenSidebar={OpenSidebar}
        handleActiveChange={handleActiveChange}
      />
      <div className="area">
        {active === "Dashboard" && <Dashboard />}
        {active === "Books" && <Booklist />}
        {active === "Issue/Return" && <IssueReturn />}
      </div>
    </div>
  );
}

export default App;
