require('dotenv').config();

const apiKey = process.env.REACT_APP_API_KEY;
// const url = `https://api.nytimes.com/svc/movies/v2/reviews/search.json?query=${query}&api-key=${apiKey}`

export const getMovieReview = (searchQuery) => {
  return fetch(`https://api.nytimes.com/svc/movies/v2/reviews/search.json?query=${searchQuery}&api-key=${apiKey}`)
    .then(response => response.json())
}