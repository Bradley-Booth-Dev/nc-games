import { useEffect, useState } from "react";
import * as api from "../api.js";
import { useParams } from "react-router-dom";

export default function SingleReview() {
  const { review_id } = useParams();
  const [singleReview, setSingleReview] = useState({});

  useEffect(() => {
    api.getReview(review_id).then(({ review }) => {
      setSingleReview(review);
    });
  }, []);
  const createdAtDate = new Date(singleReview.created_at);
  const createdAtString = createdAtDate.toLocaleDateString();
  const createdAtTimeString = createdAtDate.toLocaleTimeString();

  return (
    <div>
      <section className="singleReview">
        <h3 className="reviewTitle">{singleReview.title}</h3>
        <p className="user">User: {singleReview.owner}</p>
        <img className="img" src={singleReview.review_img_url} alt="" />
        <p className="body">{singleReview.review_body}</p>
        <p>Votes: {singleReview.votes}</p>
        <p>Comments: {singleReview.comment_count} </p>
        <p>
          Posted at: {createdAtString} at {createdAtTimeString}
        </p>
      </section>
    </div>
  );
}
