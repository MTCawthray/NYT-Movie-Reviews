import './DisplayArea.css';
import Card from '../Card/Card';

const DisplayArea = ({ results }) => {

  const makeCards = results.map(result => {
      console.log('img url test in display area', result)
      return (
        // <Card 
        //   headline={result.headline}
        //   publicationDate={result.publication_date}
        //   key={result.date_updated}
        // />

        <li 
        className="review-snippet"
        key={result.date_updated}>
          <div className="snippet-holder">
            <p>
              <strong>{result.headline}</strong> <em>published {result.publication_date}</em>
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