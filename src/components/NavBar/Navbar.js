import "./Navbar.css";
import CartWidget from "../CartWidget/CartWidget";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <div>
            <NavLink className="navbar-brand" to="/home">
              <img
                class="logo-img"
                src={require("../../assets/LogoBarberStyle.png")}
                alt="Logo BarberStyle"
              />
            </NavLink>
            <NavLink to="/home">
              <h1>BarberStyle</h1>
            </NavLink>
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
                <NavLink className="nav-link active" to="/home">
                  Services
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link active" to="/home">
                  Works
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link active" to="/home">
                  FAQ
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link active" to="/home">
                  Reviews
                </NavLink>
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
