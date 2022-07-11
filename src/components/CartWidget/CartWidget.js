import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";
import "./CartWidget.css";
import { NavLink } from "react-router-dom";

function CartWidget() {
  return (
    <li class="nav-item">
      <NavLink to="/cart">
        <img class="shopImg" src={require("../../assets/carrito-shop.jpg")} />
      </NavLink>
    </li>
  );
}

export default CartWidget;
