import './App.css';
import { useState } from 'react';
import { getMovieReview } from '../../utils.js';
import Header from '../Header/Header';
import DisplayArea from '../DisplayArea/DisplayArea';

function App() {

  const [reviews, setReviews] = useState([])

  const findReviews = (searchQuery) => {
    getMovieReview(searchQuery)
      .then(data => setReviews(data.results))
      .catch(error => console.log('error from GET', error))
  }

  return (
    <div className="App">
      <Header
        findReviews={findReviews}
      />
      <DisplayArea results={reviews} />
    </div>
  );
}

export default App;
