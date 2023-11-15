import "./styles/topBar.css";

const TopBar = ({ activeLink, name }) => {
  return (
    <div className="top-bar">
      <div className="logo">
        <img src="/path/to/logo.png" alt="Logo" />
        <span>{activeLink}</span>
      </div>
      <div className="user">
        <span>{name}</span>
      </div>
    </div>
  );
};

export default TopBar;
