import ReactDOM from "react-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Login from "./login-page";
import "./index.css";
import App from "./App";
ReactDOM.render(
  <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/App" element={<App />} />
    </Routes>
  </Router>,
  document.getElementById("root")
);
