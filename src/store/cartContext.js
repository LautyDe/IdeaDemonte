import { useState, createContext } from "react";

export const CartContext = createContext({});

const { Provider } = CartContext;
const Cart = [];

export const CartProvider = ({ defaultValue = [], children }) => {
  const [cart, setCart] = useState(defaultValue);

  const clearCart = () => {
    setCart([]);
  };

  const addToCart = (item, quantity) => {
    setCart([
      ...Cart,
      {
        item: item,
        quantity: quantity,
      },
    ]);
  };

  const context = {
    cart,
    clearCart,
    addToCart,
  };
  return (
    <>
      <Provider value={context}>{children}</Provider>
    </>
  );
};
