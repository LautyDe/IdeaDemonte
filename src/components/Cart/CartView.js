import useCartContext from "../../store/CartContext";
import { NavLink } from "react-router-dom";
import "./CartView.css";

function CartView() {
  const { cart, removeFromCart, clearCart, priceInCart } = useCartContext();
  console.log(cart);

  if (cart.length === 0) {
    return (
      <h2 className="noItems">
        No hay items en el carrito, vea nuestro{" "}
        {
          <NavLink to="/shop" className="shopLink">
            <a>shop</a>
          </NavLink>
        }{" "}
        para seleccionar productos!
      </h2>
    );
  } else {
    return (
      <div className="yesItems">
        {cart.map((itemCart) => {
          return (
            <div>
              <h2>Producto: {itemCart.name}</h2>
              <h5>Cantidad: {itemCart.cant}</h5>
              <h3>Precio: ${itemCart.cant * itemCart.price}</h3>
              <button
                onClick={() => removeFromCart(itemCart.id)}
                className="remove"
              >
                X
              </button>
            </div>
          );
        })}
        <h2>Precio total: ${priceInCart()}</h2>
        <div>
          <button onClick={clearCart}>Vaciar carrito</button>
          <button>Terminar compra!</button>
        </div>
      </div>
    );
  }
}

export default CartView;
