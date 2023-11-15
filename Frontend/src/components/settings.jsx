import { useState } from "react";
import "./styles/settings.css";

function Settings() {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordsMatch, setPasswordsMatch] = useState(true);

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
  };

  const changePassword = () => {
    if (password === confirmPassword) {
      console.log("Password changed successfully!");
    } else {
      setPasswordsMatch(false);
    }
  };

  return (
    <div className="Settings">
      <h2>Change Password</h2>
      <input
        type="password"
        placeholder="Enter new password"
        value={password}
        onChange={handlePasswordChange}
      />
      <input
        type="password"
        placeholder="Confirm new password"
        value={confirmPassword}
        onChange={handleConfirmPasswordChange}
      />
      {!passwordsMatch && <p>Passwords do not match</p>}
      <button onClick={changePassword}>Change Password</button>
    </div>
  );
}

export default Settings;
