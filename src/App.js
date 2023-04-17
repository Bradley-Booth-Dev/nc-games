import "./App.css";
import { Route, Router, Routes } from "react-router-dom";

import React from "react";
import Header from "./Header";
import Body from "./Body";

function App() {
  return (
    <div className="App">
      <routers></routers>
      <Header />
      <Routes>
        <Route path="/" element={<Body />} />
      </Routes>
    </div>
  );
}

export default App;
