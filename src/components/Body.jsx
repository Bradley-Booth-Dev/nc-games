
import Categories from "./Categories";
import ReviewList from "./Review-list";
import SingleReview from "./Single-review";


export default function Body() {
  

  return (
    <div>
      <ReviewList/>

      <SingleReview />

      <Categories />
    </div>
  );
}
