import "./App.css";
import { Route, Router, Routes } from "react-router-dom";

import React from "react";
import Header from "./components/Header";
import Body from "./components/Body";
import ReviewList from "./components/Review-list";
import Users from "./components/Users";
import Homepage from "./components/Homepage";
import SingleReview from "./components/Single-review";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/reviews" element={<ReviewList />} />
        <Route path="/users" element={<Users />} />
        <Route path="/reviews/:review_id" element={<SingleReview />} />
      </Routes>
    </div>
  );
}

export default App;
