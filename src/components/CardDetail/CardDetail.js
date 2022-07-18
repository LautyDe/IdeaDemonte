import { NavLink } from "react-router-dom";
import ItemCount from "../ItemCount/ItemCount";
import { useState } from "react";
import useCartContext from "../../store/CartContext";

function CardDetail(props) {
  const [noCount, setNoCount] = useState(false);
  const { addToCart } = useCartContext();

  function onAdd(count) {
    addToCart(props.item, count);
    console.log("Agregado al cart: ", props.item, count);
    setNoCount(true);
  }

  return (
    props.item.id !== undefined && (
      <>
        <h1>{props.name}</h1>
        <img src={props.imgPath} alt="" className="detailImg" />
        <p>{props.item.description}</p>
        <p>{`Stock disponible: ${props.item.stock}`}</p>
        {!noCount && (
          <ItemCount
            initial={1}
            stock={props.item.stock}
            id={props.item.id}
            onAdd={onAdd}
          />
        )}
        {noCount && (
          <>
            <p className="redirection">
              Su producto ha sido agregado al carrito!
            </p>
            <NavLink to="/shop">
              <button>Seguir comprando</button>
            </NavLink>
            <NavLink to="/cart">
              <button>Ir al carrito</button>
            </NavLink>
          </>
        )}
      </>
    )
  );
}

export default CardDetail;
