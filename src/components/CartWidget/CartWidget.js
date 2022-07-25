import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";
import "./CartWidget.css";
import { NavLink } from "react-router-dom";
import useCartContext from "../../store/CartContext";

function CartWidget() {
  const { cantInCart } = useCartContext();
  return (
    <li class="nav-item">
      <NavLink className="navWidget" to="/cart">
        <img class="shopImg" src={require("../../assets/carrito-shop.jpg")} />
        <div className="widgetCant">({cantInCart()})</div>
      </NavLink>
    </li>
  );
}

export default CartWidget;
