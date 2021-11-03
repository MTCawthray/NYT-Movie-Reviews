require('dotenv').config();

const apiKey = process.env.REACT_APP_API_KEY;

export const getMovieReview = (searchQuery) => {
  return fetch(`https://api.nytimes.com/svc/movies/v2/reviews/search.json?query=${searchQuery}&api-key=${apiKey}`)
    .then(response => response.json())
}

export const getCriticsPicks = () => {
  return fetch(`https://api.nytimes.com/svc/movies/v2/reviews/picks.json?api-key=${apiKey}`)
    .then(response => response.json())
}