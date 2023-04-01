import SearchBar from "./SearchBar";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
export default function Nav(props) {
  const location = useLocation();
  if (location.pathname === "/") {
    return null;
  }
  return (
    <div>
      <Link to="/about">
        <p>About</p>
      </Link>
      <Link to="/Home">
        <p>Home</p>
      </Link>
      <Link to="/Favorites">
        <p>Favorites</p>
      </Link>
      <SearchBar onSearch={props.onSearch} />
    </div>
  );
}
