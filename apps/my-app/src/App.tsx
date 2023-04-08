import React from "react";
import logo from "./logo.svg";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import { Dashboard, ActivityPage, ProfilePage } from "ui";

function App() {
  const list = ["dashboard", "activity", "profile"];
  return (
    <div className="App">
      <ul>
        {list.map((link) => {
          return (
            <li key={link}>
              <a href={link}>{link}</a>
            </li>
          );
        })}
      </ul>
      <Router>
        <Routes>
          <Route path="/" element={<div>Home</div>} />
          {/* <Route path="/dashboard" element={<div>Dashboard</div>} />
          <Route path="/activity" element={<div>Activity</div>} />
          <Route path="/profile" element={<div>Profile</div>} /> */}
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/activity" element={<ActivityPage />} />
          <Route path="/profile" element={<ProfilePage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
