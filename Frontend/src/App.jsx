import { BrowserRouter as Router } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import LoginForm from "./pages/login";
import Landing from "./pages/landing";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/lms" element={<Landing />} />
          <Route path="/" element={<LoginForm />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;