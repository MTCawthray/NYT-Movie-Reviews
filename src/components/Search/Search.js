import './Search.css';
import { useState } from 'react';

const Search = () => {

  const [query, setQuery] = useState('');

  return (
    <input className="search" type="text" value={query} placeHolder="search movie reviews" onChange={(e) => setQuery('e.target.value')}/>
  )
}

export default Search;