import { Link, NavLink } from "react-router-dom";

const Navbar = ({ user }) => {
  return (
    <nav
      className="navbar navbar-expand-sm navbar-dark bg-dark bg-gradient shadow-sm"
      aria-label="Third navbar example"
    >
      <div className="container">
        <Link to="/" className="navbar-brand">
          Real <i className="fa-solid fa-map-pin"></i> App
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarsExample03"
          aria-controls="navbarsExample03"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarsExample03">
          <ul className="navbar-nav me-auto mb-2 mb-sm-0">
            <li className="nav-item">
              <NavLink to="/about" className="nav-link">
                <i className="fa-solid fa-circle-info me-2"></i>About
              </NavLink>
            </li>
            {user?.biz && (
              <li className="nav-item">
                <NavLink to="/my-cards" className="nav-link">
                  <i className="fa-solid fa-suitcase me-2"></i>My Cards
                </NavLink>
              </li>
            )}
          </ul>

          <ul className="navbar-nav ms-auto mb-2 mb-sm-0">
            {user ? (
              <li className="nav-item">
                <NavLink to="/logout" className="nav-link">
                  <i className="fa-solid fa-arrow-right-from-bracket me-2"></i>
                  Sign Out
                </NavLink>
              </li>
            ) : (
              <>
                <li className="nav-item">
                  <NavLink to="/signin" className="nav-link">
                    Sign In
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to="/signup" className="nav-link">
                    Sign Up
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to="/signup-biz" className="nav-link">
                    Business
                  </NavLink>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;