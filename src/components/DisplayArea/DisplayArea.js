import './DisplayArea.css';

const DisplayArea = ({ results, select }) => {

  const makeCards = results.map(result => {
      console.log('img url test in display area', result)
      return (
        <li 
        className="review-snippet"
        key={result.date_updated}
        id={result.headline}
        onClick={(e) => select(e.target)}>
          <div className="snippet-holder">
            <p id={result.headline}>
              {result.headline} published {result.publication_date}
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