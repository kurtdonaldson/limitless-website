import { Link } from "react-router-dom";
import "../components/NotFound.css";

export default function NotFound() {
  return (
    <div className="not-found-container">
      <div className="not-found-content d-flex flex-column align-items-center">
        <h1 className="mb-5">Oops! You seem to be lost.</h1>
        <p className="mb-5">Here are some helpful links:</p>
        <div className="navlink-container">
          <Link className="navlink" to="/">
            Home
          </Link>
          <Link className="navlink" to="/about">
            About
          </Link>
          <Link className="navlink" to="/services">
            Services
          </Link>
          <Link className="navlink" to="/contact">
            Contact
          </Link>
        </div>
      </div>
    </div>
  );
}
