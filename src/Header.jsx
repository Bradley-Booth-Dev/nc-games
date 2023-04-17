import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div>
      <Link to="/">
        <h1>NC Games</h1>
      </Link>
    </div>
  );
}
