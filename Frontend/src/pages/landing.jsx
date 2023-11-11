import { useState } from "react";
import "./styles/landing.css";
import Header from "../components/header";
import Sidebar from "../components/sidebar";
import Dashboard from "../components/dashboard";
import Booklist from "../components/booklist";
import AddBook from "../components/addBook";

function App() {
  const [openSidebarToggle, setOpenSidebarToggle] = useState(false);

  const OpenSidebar = () => {
    setOpenSidebarToggle(!openSidebarToggle);
  };

  return (
    <div className="grid-container">
      <Header OpenSidebar={OpenSidebar} />
      <Sidebar
        openSidebarToggle={openSidebarToggle}
        OpenSidebar={OpenSidebar}
      />
      <Dashboard />
    </div>
  );
}

export default App;
