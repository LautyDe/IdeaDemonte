import useCartContext from "../../store/CartContext";
import { NavLink } from "react-router-dom";
import "./CartView.css";
import { createBuyOrder } from "../../services/firestore";
import { useState } from "react";

function CartView() {
  const { cart, removeFromCart, clearCart, priceInCart } = useCartContext();
  const [order, setOrder] = useState(false);

  function buyHandler() {
    const itemsToBuy = cart.map((item) => ({
      title: item.name,
      cant: item.cant,
      price: item.price,
      id: item.id,
    }));
    const buyOrder = {
      buyer: {
        name: "Lautaro",
        phone: "1234567899",
        email: "hola@prueba.com",
      },
      items: itemsToBuy,
      total: priceInCart(),
    };

    createBuyOrder(buyOrder);
    setOrder(true);
    clearCart();
  }

  if (cart.length === 0) {
    if (order == false) {
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
        <div className="orderFinished">
          <h2>Su producto ha sido agregado al carrito!</h2>
          <h4>{` `}</h4>
        </div>
      );
    }
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
          <button onClick={buyHandler}>Terminar compra!</button>
        </div>
      </div>
    );
  }
}

export default CartView;
