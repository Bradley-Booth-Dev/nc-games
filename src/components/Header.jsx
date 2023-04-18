import { Link } from "react-router-dom";
import Users from "./Users";

export default function Header() {
  return (
    <div className="headerBar">
      <Link to="/">
        <h1 className="headerTitle">NC Games</h1>
      </Link>
      <Link to="/reviews">
        <h1 className="headerReviews">Reviews</h1>
      </Link>
    </div>
  );
}
