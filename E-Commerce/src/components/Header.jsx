import { FiGrid } from "react-icons/fi";
import { GrTable } from "react-icons/gr";
import { FaShoppingCart, FaHome } from "react-icons/fa";
import style from "./styles/Header.module.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className={`sticky-top text-white ${style.GlassHeader}`}>
      {/* Top Navbar */}
      <div className="px-3 py-2 text-white">
        <div className="container">
          <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
            <a
              href="/"
              className="d-flex align-items-center my-2 my-lg-0 me-lg-auto text-white text-decoration-none"
            >
              <span className="fs-4 fw-bold">E-Com</span>
            </a>

            <ul className="nav col-12 col-lg-auto my-2 justify-content-center my-md-0 text-small">
              <li>
                <Link to="/" className="nav-link text-white text-center">
                  <FaHome size={25} className="d-block mx-auto mb-1" />
                  Home
                </Link>
              </li>

              <li>
                <Link
                  to="/products"
                  className="nav-link text-white text-center"
                >
                  <FiGrid size={25} className="d-block mx-auto mb-1" />
                  Products
                </Link>
              </li>

              <li>
                <a href="#" className="nav-link text-white text-center">
                  <GrTable size={25} className="d-block mx-auto mb-1" />
                  Orders
                </a>
              </li>

              <li>
                <a href="#" className="nav-link text-white text-center">
                  <FaShoppingCart size={25} className="d-block mx-auto mb-1" />
                  Cart
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="px-3 py-2 border-bottom">
        <div className="container d-flex flex-wrap justify-content-center">
          <form
            className="col-12 col-lg-auto mb-2 mb-lg-0 me-lg-auto"
            role="search"
          >
            <input
              type="search"
              className="form-control"
              placeholder="Search..."
              aria-label="Search"
            />
          </form>

          <div className="text-end">
            <button type="button" className="btn btn-light text-dark me-2">
              Login
            </button>
            <button type="button" className="btn btn-primary">
              Sign-up
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
