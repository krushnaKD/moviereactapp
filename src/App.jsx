import React from "react";
import Home from "./components/Home";
import { Route, Routes } from "react-router-dom";
function App() {
  return (
    <div className="bg-[#1f1e24] w-screen h-screen flex overflow-x-hidden select-none">
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
