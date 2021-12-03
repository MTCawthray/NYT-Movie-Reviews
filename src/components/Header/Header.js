import './Header.css';
import Search from '../Search/Search';

const Header = ({ findReviews }) => {


  return (
    <header className="header"> 
      <h1>
        <span className="style-font">New York Times</span> | Movie Reviews
      </h1>
      <Search findReviews={findReviews} />
    </header>
  )
}

export default Header;