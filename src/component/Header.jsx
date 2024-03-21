import React from "react";
import { FaShoppingCart } from "react-icons/fa";
import { CartState } from "../context/Context";
import { Badge } from "react-bootstrap";
import { Link } from "react-router-dom";

const Header = () => {
  const {
    state: { cart },
  } = CartState();
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-dark">
        <div className="container-fluid" style={{ gap: "64px" }}>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo03"
            aria-controls="navbarTogglerDemo03"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <h4 style={{ color: "wheat" }}>MyShop</h4>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <form className="d-flex" role="search">
                <input
                  style={{ width: "500px" }}
                  className="form-control me-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
                <button className="btn btn-outline-success" type="submit">
                  Search
                </button>
              </form>
            </ul>

            <li className="nav-item">
              <Link to="/login">
                <a className="nav-link" href="#">
                  Login
                </a>
              </Link>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                // aria-expanded="false"
              >
                <FaShoppingCart />
                <Badge style={{ padding: "1px" }}>{cart.length}</Badge>
              </a>
              <ul className="dropdown-menu">
                <a className="dropdown-item" href="#">
                  Your Cart is Empty!🥺
                </a>
              </ul>
            </li>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
