// App.jsx
import React from "react";
import { Routes, Route } from "react-router-dom";
import FactSheet from "./components/FactSheet";
import Welcome from "./components/Welcome";

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/g4/:name/:token/:userId" element={<FactSheet />} />
        <Route path="/" element={<Welcome />} />

      </Routes>
    </div>
  );
}

export default App;
