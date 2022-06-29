import "./Navbar.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";
import CartWidget from "./CartWidget";

function Navbar() {
  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <div>
            <a className="navbar-brand" href="#start">
              <img
                class="logo-img"
                src={require("../assets/LogoBarberStyle.png")}
                alt="Logo BarberStyle"
              />
            </a>
            <a href="#start">
              <h1>BarberStyle</h1>
            </a>
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
                <a className="nav-link active" href="#services">
                  Services
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" href="#works">
                  Works
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" href="#faq">
                  FAQ
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" href="#reviews">
                  Reviews
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" href="./products.html">
                  Shop
                </a>
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
