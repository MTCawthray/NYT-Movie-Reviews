import './App.css';
import { useState } from 'react';
import { getMovieReview } from '../../utils.js';
import Header from '../Header/Header';
import DisplayArea from '../DisplayArea/DisplayArea';
import Card from '../Card/Card';

function App() {

  const [reviews, setReviews] = useState([])
  const [selectedReview, setSelectedReview] = useState(null)

  const selectReview = (target) => {
    console.log(target)
    setSelectedReview(null);

    reviews.find(review => {
      // console.log(review.headline, target)
      if (target.id === review.headline) {
        console.log('match!')
        setSelectedReview(review);
      }
      console.log('did not match')
      return
    })

  }

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
      <section className="content-holder">
        <DisplayArea 
          results={reviews} 
          select={selectReview}
        />
        {selectedReview && (
        <Card
          selectedReview={selectedReview}
        />)}
      </section>
    </div>
  );
}

export default App;
