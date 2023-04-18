import { Link } from "react-router-dom";
import Users from "./Users";

export default function Header() {
  return (
    <div>
      <Link to="/">
        <h1>NC Games</h1>
      </Link>
      <Link to="/reviews">
        <h1>Reviews</h1>
      </Link>
    </div>
  );
}
