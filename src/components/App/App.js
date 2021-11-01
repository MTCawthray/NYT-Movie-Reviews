import './App.css';
import { useState } from 'react';
import { getMovieReview } from '../../utils.js';
import Header from '../Header/Header';
import DisplayArea from '../DisplayArea/DisplayArea';

function App() {

  const [reviews, setReviews] = useState([])

  const findReviews = (searchQuery) => {
    getMovieReview(searchQuery)
      .then(data => console.log('data from GET', data.results))
      // .then(data => )
      .catch(error => console.log('error from GET', error))
  }

  return (
    <div className="App">
      <Header
        findReviews={findReviews}
      />
      <DisplayArea/>
    </div>
  );
}

export default App;
