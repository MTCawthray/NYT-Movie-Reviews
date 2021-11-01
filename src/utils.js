require('dotenv').config();

const apiKey = process.env.REACT_APP_API_KEY;
const url = `https://api.nytimes.com/svc/movies/v2/reviews/search.json?query=${query}&api-key=${apiKey}`

export const getMovieReview = (query) => {
  return fetch(url)
    .then(response => response.json)
}