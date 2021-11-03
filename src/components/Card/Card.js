import './Card.css';

const Card = ({ selectedReview }) => {

  const { byline, critics_pick, date_updated, display_title, headline, link, mpaa_rating, multimedia, opening_date, publication_date, summary_short } = selectedReview

  return (
    <article className="card"  >
    <div className="title-rating-holder">
      <h2 className="title-info">
        {display_title}
      </h2>
      <p>
        Rated: {mpaa_rating} | 
      </p>
      <p>
        opened: {opening_date}
      </p>
    </div>
    {multimedia && <img src={multimedia.src} alt={display_title} className={multimedia.type} />}
    <h3 className="headline">
      {headline} written by {byline}
    </h3>
    <h3 className="movie-italic">
      published on {publication_date}. updated on {date_updated}.
    </h3> 
    <div className="link-holder">
      <a href={link.url} >
        {link.suggested_link_text}
      </a>
    </div>

    <p className="summary-holder">
      <strong>Summary: </strong>
      {summary_short}
    </p>
    
    </article>
  )
}

export default Card;