import './App.css';
import { useState, useEffect } from 'react';
import { getMovieReview, getCriticsPicks } from '../../utils.js';
import Header from '../Header/Header';
import DisplayArea from '../DisplayArea/DisplayArea';
import Card from '../Card/Card';
import logo from '../../assets/nyt-logo.jpg'

function App() {

  const [reviews, setReviews] = useState([])
  const [selectedReview, setSelectedReview] = useState(null)

  useEffect(() => {
    getCriticsPicks()
    .then(data => setReviews(data.results))
    .catch(error => console.log(error));
  }, [])

  const selectReview = (target) => {

    reviews.find(review => {
      if (target.id === review.headline) {
        setSelectedReview(review);
      }
      return
    })

  }

  const findReviews = (searchQuery) => {
    getMovieReview(searchQuery)
      .then(data => {
        if(data.results) {
          setReviews(data.results)
        } else {
          getCriticsPicks()
            .then(data => setReviews(data.results))
            .catch(error => console.log(error));
        } 
      })
      .catch(error => console.log(error))
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
        {selectedReview ? (
        <Card
          selectedReview={selectedReview}
        />) : <img src={logo} alt="nyt logo" className="greeting" /> }
      </section>
    </div>
  );
}

export default App;
