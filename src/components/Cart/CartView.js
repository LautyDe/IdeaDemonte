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
        <div className="noItems">
          <h3 className="noItemsText">
            No hay items en el carrito, vea nuestro{" "}
            {
              <NavLink to="/shop" className="shopLink">
                <a>shop</a>
              </NavLink>
            }{" "}
            para seleccionar productos!
          </h3>
        </div>
      );
    } else {
      return (
        <div className="orderFinished">
          <h3 className="finishText">Su compra ha sido finalizada!</h3>
        </div>
      );
    }
  } else {
    return (
      <div className="yesItems">
        {cart.map((itemCart) => {
          return (
            <div className="cartShop">
              <h3>Producto: {itemCart.name}</h3>
              <h5>Cantidad: {itemCart.cant}</h5>
              <h4>Precio: ${itemCart.cant * itemCart.price}</h4>
              <button
                onClick={() => removeFromCart(itemCart.id)}
                className="remove"
              >
                X
              </button>
            </div>
          );
        })}
        <h3 className="totalPrice">Precio total: ${priceInCart()}</h3>
        <div>
          <button onClick={clearCart}>Vaciar carrito</button>
          <button onClick={buyHandler}>Terminar compra!</button>
        </div>
      </div>
    );
  }
}

export default CartView;
