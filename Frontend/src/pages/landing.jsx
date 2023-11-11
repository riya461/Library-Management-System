import { useState } from "react";
import "./styles/landing.css";
import Header from "../components/header";
import Sidebar from "../components/sidebar";
import Dashboard from "../components/dashboard";
import Booklist from "../components/booklist";
import IssueReturn from "../components/issueReturn";

function App() {
  const [openSidebarToggle, setOpenSidebarToggle] = useState(false);
  const [active, setActive] = useState("Issue/Return");

  const handleActiveChange = (active) => {
    console.log(active);
    setActive(active);
    console.log(active);
  };

  const OpenSidebar = () => {
    setOpenSidebarToggle(!openSidebarToggle);
  };

  return (
    <div className="grid-container">
      <Header OpenSidebar={OpenSidebar} />
      <div className="area">
        <Sidebar
          openSidebarToggle={openSidebarToggle}
          OpenSidebar={OpenSidebar}
          handleActiveChange={handleActiveChange}
        />
        {active === "Dashboard" && <Dashboard />}
        {active === "Books" && <Booklist />}
        {active === "Issue/Return" && <IssueReturn />}
      </div>
    </div>
  );
}

export default App;
