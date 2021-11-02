import './Search.css';
import { useState } from 'react';

const Search = ({ findReviews }) => {

  const [query, setQuery] = useState('');


  const handleClick = (e) => {
    e.preventDefault();
    findReviews(query);
    setQuery('');
  }

  return (
    <form className="search">
      <input className="search-bar" type="text" value={query} placeholder="search movie reviews" onChange={(e) => setQuery(e.target.value)}/>
      <button className="submit-btn" type="submit" onClick={(e) => handleClick(e)}>
        Search
      </button>
    </form>
  )
}

export default Search;