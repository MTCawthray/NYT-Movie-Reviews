import './DisplayArea.css';
import Card from '../Card/Card';

const DisplayArea = ({ results }) => {

  const makeCards = results.map(result => {
      console.log('img url test in display area', result.multimedia)
      return (
        <Card 
          title={result.displayTitle}
          img={result.multimedia}
          headline={result.headline}
          link={result.link}
          publicationDate={result.publication_date}
          sumary={result.summary_short}
          key={result.date_updated}
        />
      )

  });

  return (
    <section className="display-area">
      {makeCards}
    </section>
  )
}

export default DisplayArea;