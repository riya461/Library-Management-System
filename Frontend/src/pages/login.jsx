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
    navigate("/lms");

  //   try {
  //     fetch("http://localhost:5000/api/login", {
  //       method: "POST",
  //       headers: { "Content-Type": "application/json" },
  //       body: JSON.stringify({
  //         userid: userid,
  //         password: password,
  //       }),
  //     }).then((res) => res.json()).then((result) => {
  //       if (result != "NULL") {
  //         setError("");
  //         localStorage.setItem("userid", userid);
  //         localStorage.setItem("name", result.name);
  //         localStorage.setItem("category", result.category);
  //         localStorage.setItem("token", "logged_in");
  //         navigate("/");
  //       }
  //       else {
  //         setError("An error occurred! Please check your credentials");
  //       }
  //     });
  //   } catch (error) {
  //     setError("An error occurred! Please check your credentials");
  //   }
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
            placeholder="LoginID"
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
