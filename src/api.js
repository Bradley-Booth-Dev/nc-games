import axios from "axios";

export const getReviews = () => {
  return axios
    .get(`https://nc-games-lua8.onrender.com/api/reviews/`)
    .then((response) => response.data);
};
