import { useEffect, useState } from "react";
import * as api from "../api.js";
import { useParams } from "react-router-dom";

export default function SingleReview() {
  const { review_id } = useParams();
  const [singleReview, setSingleReview] = useState({});
  const [comments, setComments] = useState([]);
  const [reviewVotes, setReviewVotes] = useState(0);
  const [voteError, setVoteError] = useState(false);
  const [commentError, setCommentError] = useState(false);
  const [commentTimeError, setCommentTimeError] = useState(false);
  const [newComment, setNewComment] = useState("");

  const handleVotes = (review_id, voteChange) => {
    setReviewVotes((currentVotes) => {
      return currentVotes + voteChange;
    });
    api.patchVotes(review_id, voteChange).catch(() => {
      setReviewVotes((currentVotes) => {
        return currentVotes - voteChange;
      });
      setVoteError(true);

      voteError && (
        <p>There was an error posting your vote. Please try again later.</p>
      );
    });
  };

  const handleComments = (review_id, postedComment) => {
    const currentTime = new Date().getTime();
    const lastCommentTime = localStorage.getItem("lastCommentTime");
    if (lastCommentTime && currentTime - lastCommentTime < 60000) {
      setCommentTimeError(true);
      return;
    }
    api
      .postComment(review_id, postedComment)
      .then(() => {
        const endTime = new Date().getTime();
        localStorage.setItem("lastCommentTime", endTime);
        setNewComment("");
        api.getComments(review_id).then(({ comments }) => {
          setComments(comments);
        });
      })
      .catch(() => {
        setCommentError(true);
      });
  };

  useEffect(() => {
    api.getReview(review_id).then(({ review }) => {
      setSingleReview(review);
    });
  }, [review_id]);

  useEffect(() => {
    api.getComments(review_id).then(({ comments }) => {
      setComments(comments);
    });
  }, [comments]);

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

        {voteError && (
          <p>There was an error posting your vote. Please try again later.</p>
        )}
        <button onClick={() => handleVotes(review_id, 1)}>Upvote</button>
        <button onClick={() => handleVotes(review_id, -1)}>Downvote</button>
        <p>Votes: {singleReview.votes + reviewVotes}</p>
        <p>Comments: {singleReview.comment_count} </p>
        <p>
          Posted at: {createdAtString} at {createdAtTimeString}
        </p>
      </section>
      <section>
        <label> Add comment:</label>
        <textarea
          value={newComment}
          onChange={(event) => setNewComment(event.target.value)}
        />
        {commentTimeError ? (
          <p>Please wait before posting another comment.</p>
        ) : commentError ? (
          <p>
            There was an error posting your comment. Please try again later.
          </p>
        ) : null}

        <button onClick={() => handleComments(review_id, newComment)}>
          Submit
        </button>
      </section>
      <section className="singleReviewComments">
        {comments.length === 0 ? (
          <p>No comments</p>
        ) : (
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
                  <h5 className="comentBody">{comment.body}</h5>
                  <h6>Votes: {comment.votes}</h6>
                  <h6>
                    Posted at: {createdAtString} at {createdAtTimeString}
                  </h6>
                </li>
              );
            })}
          </ol>
        )}
      </section>
    </div>
  );
}
