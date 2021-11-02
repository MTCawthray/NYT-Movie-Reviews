import './Card.css';

const Card = ({ title, img, headline, link, publicationDate, summary }) => {

  return (
    <article className="card"  >
      <a href={link}>
        <h3 className="title">
          {title}
        </h3>
        {img && <img src={img.src} alt={title + ' thumbnail'} className={img.type} />}
        <p className="headline" >
          {headline}
        </p>
        <p className="summary" >
          {summary}
        </p>
        <p className="published-date">
          published on {publicationDate}
        </p>
      </a>
    </article>
  )
}

export default Card;