import "./styles/dashboard.css";

const Dashboard = () => {
  return (
    <div className="dashboard">
      <div className="row">
        <div className="box">
          <h3>Total Books</h3>
          <p>100</p>
        </div>
        <div className="box">
          <h3>Total Authors</h3>
          <p>100</p>
        </div>
        <div className="box">
          <h3>Total Publishers</h3>
          <p>100</p>
        </div>
      </div>
      <div className="row">
        <div className="box">
          <h3>Available Books</h3>
          <p>70</p>
        </div>
        <div className="box">
          <h3>Borrowed Books</h3>
          <p>30</p>
        </div>
        <div className="box">
          <h3>Total Members</h3>
          <p>50</p>
        </div>
      </div>
      <div className="row">
        <div className="box">
            <img src="../assets/lib.jpg" alt="Library" />
        </div>
        <div className="box">
          <h3>Active Members</h3>
          <p>30</p>
        </div>
        <div className="box">
          <h3>Inactive Members</h3>
          <p>20</p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
