import { NavLink } from "react-router-dom";
import ItemCount from "../ItemCount/ItemCount";
import { useState } from "react";

function CardDetail(props) {
  const [noCount, setNoCount] = useState(false);

  function onAdd(count) {
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
            initial={props.item.initial}
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
            <NavLink to="/products">
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
