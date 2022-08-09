import "./Navbar.css";
import CartWidget from "../CartWidget/CartWidget";
import { NavLink } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

function Navbar() {
  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <div>
            <HashLink className="navbar-brand" to="/home#start">
              <img
                class="logo-img"
                src={require("../../assets/LogoBarberStyle.png")}
                alt="Logo BarberStyle"
              />
            </HashLink>
            <HashLink to="/home#start">
              <h1>BarberStyle</h1>
            </HashLink>
          </div>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <HashLink className="nav-link active" to="/home#services">
                  Services
                </HashLink>
              </li>
              <li className="nav-item">
                <HashLink className="nav-link active" to="/home#works">
                  Works
                </HashLink>
              </li>
              <li className="nav-item">
                <HashLink className="nav-link active" to="/home#faq">
                  FAQ
                </HashLink>
              </li>
              <li className="nav-item">
                <HashLink className="nav-link active" to="/home#reviews">
                  Reviews
                </HashLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link active" to="/shop">
                  Shop
                </NavLink>
              </li>

              <CartWidget />
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
