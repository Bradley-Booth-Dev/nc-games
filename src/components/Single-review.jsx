import { useEffect, useState } from "react";
import * as api from "../api.js";
import { useParams } from "react-router-dom";

export default function SingleReview() {
  const { review_id } = useParams();
  const [singleReview, setSingleReview] = useState({});
  const [comments, setComments] = useState([]);

  useEffect(() => {
    api.getReview(review_id).then(({ review }) => {
      setSingleReview(review);
    });
  }, [review_id]);

  useEffect(() => {
    api.getComments(review_id).then(({ comments }) => {
      setComments(comments);
    });
  }, [review_id]);
  const createdAtDate = new Date(singleReview.created_at);
  const createdAtString = createdAtDate.toLocaleDateString();
  const createdAtTimeString = createdAtDate.toLocaleTimeString();

  return (
    <div>
      <section className="singleReview" key={review_id}>
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

      <section className="singleReviewComments">
        <ol>
          Comments:
          {comments.map((comment) => {
            const createdAtDate = new Date(comment.created_at);
            const createdAtString = createdAtDate.toLocaleDateString();
            const createdAtTimeString = createdAtDate.toLocaleTimeString();
            const comment_id = comment.comment_id;

            return (
              <li className="singleComment" key={comment_id}>
                <h4>Username:{comment.author}</h4>
                <h5>{comment.body}</h5>
                <h6>Votes: {comment.votes}</h6>
                <h6>
                  Posted at: {createdAtString} at {createdAtTimeString}
                </h6>
              </li>
            );
          })}
        </ol>
      </section>
      <section className="Votes">
        <button> </button>
      </section>
    </div>
  );
}
