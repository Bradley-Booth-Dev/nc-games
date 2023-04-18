import { useEffect } from "react";
import { useState } from "react";
import * as api from "../api.js";

export default function ReviewList() {
  const [reviewList, setReviewList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    api.getReviews().then((data) => {
      setReviewList(data.reviews);
      setIsLoading(false);
    });
  }, []);

  if (isLoading) return <div>Loading reviews...</div>;

  return (
    <div>
      <h2>Reviews:</h2>
      <ol>
        {reviewList.map((review) => {
          const createdAtDate = new Date(review.created_at);
          const createdAtString = createdAtDate.toLocaleDateString();
          const createdAtTimeString = createdAtDate.toLocaleTimeString();

          return (
            <li className="reviewList" key={review.review_id}>
              <h3 className="reviewTitle">{review.title}</h3>
              <p className="user">User: {review.owner}</p>
              <img className="img" src={review.review_img_url} alt="" />
              <p className="body">{review.review_body}</p>
              <p>Votes: {review.votes}</p>
              <p>Comments: {review.comment_count} </p>
              <p>
                Posted at: {createdAtString} at {createdAtTimeString}
              </p>
            </li>
          );
        })}
      </ol>
    </div>
  );
}
