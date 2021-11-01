import './Header.css';
import '../Search/Search';

const Header = () => {


  return (
    <header className="header"> 
      <h1>
        New York Times Movie Reviews
      </h1>
      <Search />
    </header>
  )
}

export default Header;