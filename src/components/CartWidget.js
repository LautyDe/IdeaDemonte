import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";
import "./CartWidget.css";

function CartWidget() {
  return (
    <li class="nav-item">
      <a class="nav-link active" href="./cart.html">
        <img class="shopImg" src={require("../assets/carrito-shop.jpg")} />
      </a>
    </li>
  );
}

export default CartWidget;
