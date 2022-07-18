import { createContext, useState, useContext } from "react";

const CartContext = createContext();
const useCartContext = () => useContext(CartContext);

const { Provider } = CartContext;

/* 1.guardar estado de items que agreguemos al cart:
6. comprobar si X item esta en el carrito */

export function CartContextProvider({ children }) {
  const [cart, setCart] = useState([]);

  const addToCart = (item, cant) => {
    if (isInCart(item.id)) {
      const newCart = cart.map((cartItem) => {
        if (cartItem.id === item.id) {
          const copyItem = { ...cartItem };
          copyItem.cant += cant;
          return copyItem;
        } else {
          return cartItem;
        }
      });
      setCart(newCart);
    } else {
      const newItem = { ...item, cant };
      setCart([...cart, newItem]);
    }
  };

  const isInCart = (id) => {
    return cart.find((i) => i.id == id);
  };

  const removeFromCart = (id) => {
    const newCart = [...cart];
    const cartFilter = newCart.filter((item) => {
      return item.id !== id;
    });
    setCart(cartFilter);
  };

  const clearCart = () => {
    setCart([]);
  };

  const cantInCart = () => {
    let total = 0;
    cart.forEach((item) => {
      total += item.cant;
    });
    return total;
  };

  const priceInCart = () => {
    let total = 0;
    cart.forEach((item) => {
      total += item.price * item.cant;
    });
    return total;
  };

  return (
    <Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        clearCart,
        cantInCart,
        priceInCart,
      }}
    >
      {children}
    </Provider>
  );
}

export default useCartContext;
