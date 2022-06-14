function Navbar() {
  return (
    <header>
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <div class="container-fluid">
          <div>
            <a class="navbar-brand" href="#start">
              <img
                class="logo-img"
                src="/Media/Logo BarberStyle.png"
                alt="Logo BarberStyle"
              />{" "}
            </a>
            <a href="#start">
              <h1>BarberStyle</h1>
            </a>
          </div>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
              <li class="nav-item">
                <a class="nav-link active" href="#services">
                  Services
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link active" href="#works">
                  Works
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link active" href="#faq">
                  FAQ
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link active" href="#reviews">
                  Reviews
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link active" href="./products.html">
                  Shop
                </a>
              </li>

              <li class="nav-item">
                <a class="nav-link active" href="./cart.html">
                  Cart
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
