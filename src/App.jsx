import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import Auth from "./auth/Auth";
import VideoRepo from "./components/VideoRepo";
import VideoDetails from "./components/VideoDetails";
// import './App.css'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/auth" element={<Auth />} />
      <Route path="/video-repo" element={<VideoRepo />} />
      <Route path="/:id" element={<VideoDetails />} />
    </Routes>
  );
}

export default App;
