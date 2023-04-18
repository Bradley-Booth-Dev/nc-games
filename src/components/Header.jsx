import { Link } from "react-router-dom";
import Users from "./Users";

export default function Header() {
  return (
    <div className="headerBar">
      <h1 className="headerTitle">NC Games</h1>
      <Link to="/">
        <h2 className="headerHome">Home</h2>
      </Link>
      <Link to="/reviews">
        <h2 className="headerReviews">Reviews</h2>
      </Link>
    </div>
  );
}
