import "./App.css";
import { Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import ActivityPage from "./pages/ActivityPage";
import ProfilePage from "./pages/ProfilePage";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  const links = ["dashboard", "activity", "profile"];
  return (
    <div className="App">
      <ul>
        {links.map((link) => {
          return (
            <li key={link}>
              <a href={link}>{link}</a>
            </li>
          );
        })}
      </ul>
      <Router>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/activity" element={<ActivityPage />} />
          <Route path="/profile" element={<ProfilePage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
