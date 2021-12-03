import './DisplayArea.css';

const DisplayArea = ({ results, select }) => {

  const makeCards = results.map(result => {
      return (
        <li 
        className="review-snippet"
        key={result.date_updated}
        id={result.headline}
        tabindex="0"
        onKeyPress={(e) => select(e.target)}
        onClick={(e) => select(e.target)}>
          <div className="snippet-holder" id={result.headline}>
            <p 
              className="movie-strong list-info"
              id={result.headline}>
              {result.headline} 
            </p>
            <p 
              className="movie-italic list-info" 
              id={result.headline}>
              published {result.publication_date}
            </p>
          </div>
        </li>
      )

  });

  return (
    <ul className="display-area">
      {makeCards}
    </ul>
  )
}

export default DisplayArea;