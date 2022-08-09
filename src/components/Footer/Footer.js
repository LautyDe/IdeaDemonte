import "./Footer.css";
import {
  faInstagram,
  faTwitter,
  faFacebook,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { HashLink } from "react-router-hash-link";

function Footer() {
  return (
    <footer>
      <section>
        <div class="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top container footerContainer">
          <div class="col-md-4 d-flex align-items-center">
            <HashLink className="navbar-brand" to="/home#start">
              <img
                class="footerLogo"
                src={require("../../assets/LogoBarberStyle.png")}
                alt="Logo BarberStyle"
              />
            </HashLink>
            <span class="text-white">&copy; Barber Style</span>
          </div>

          <ul class="nav col-md-4 justify-content-end list-unstyled d-flex socialNetworks">
            <li class="ms-3">
              <a class="text-muted" href="https://twitter.com/">
                <FontAwesomeIcon className="icons" icon={faTwitter} />
              </a>
            </li>
            <li class="ms-3">
              <a class="text-muted" href="https://www.instagram.com/">
                <FontAwesomeIcon className="icons" icon={faInstagram} />
              </a>
            </li>
            <li class="ms-3">
              <a class="text-muted" href="https://www.facebook.com/">
                <FontAwesomeIcon className="icons" icon={faFacebook} />
              </a>
            </li>
          </ul>
        </div>
      </section>
    </footer>
  );
}

export default Footer;
