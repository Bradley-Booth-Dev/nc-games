import axios from "axios";

export const getReviews = () => {
  return axios
    .get(`https://nc-games-lua8.onrender.com/api/reviews/`)
    .then((response) => response.data);
};

export const getReview = (review_id) => {
  return axios
    .get(`https://nc-games-lua8.onrender.com/api/reviews/${review_id}`)
    .then((response) => response.data);
};

export const getComments = (review_id) => {
  return axios
    .get(`https://nc-games-lua8.onrender.com/api/reviews/${review_id}/comments`)
    .then((response) => response.data);
};

export const patchVotes = (review_id, voteChange) => {
  return axios.patch(
    `https://nc-games-lua8.onrender.com/api/reviews/${review_id}`,
    {
      inc_votes: voteChange,
    }
  );
};

export const postComment = (review_id, postedComment) => {
  return axios
    .post(
      `https://nc-games-lua8.onrender.com/api/reviews/${review_id}/comments`,
      {
        username: "tickle122",
        body: postedComment,
      }
    )
    .then((response) => response.data);
};
