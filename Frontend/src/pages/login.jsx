import { useState } from "react";
import "./styles/login.css";
import { useNavigate } from "react-router-dom";

function LoginForm() {
  const [userid, setUserid] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!userid || !password) {
      setError("Please fill in all fields");
      return;
    }

    try {
      //implement login logic here
      setError("");
      localStorage.setItem("userid", userid);
      localStorage.setItem("name", "Admin"); //change this to user
      localStorage.setItem("category", "admin"); //change this to user
      localStorage.setItem("token", "logged_in");
      navigate("/");
    } catch (error) {
      setError("An error occurred! Please check your credentials");
    }
  };

  return (
    <>
      <div className="topbar">
        <h1>Library Management System</h1>
      </div>
      <div className="login">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={userid}
            onChange={(e) => setUserid(e.target.value)}
            placeholder="UserID"
          />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
          />
          <button type="submit">Log In</button>
          <label className="error">{error}</label>
        </form>
      </div>
    </>
  );
}

export default LoginForm;
