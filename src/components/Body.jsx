import { useState } from "react";
import Categories from "./Categories";
import ReviewList from "./Review-list";
import SingleReview from "./Single-review";
import * as api from "../api.js";

export default function Body() {
  

  return (
    <div>
      <ReviewList/>

      <SingleReview />

      <Categories />
    </div>
  );
}
