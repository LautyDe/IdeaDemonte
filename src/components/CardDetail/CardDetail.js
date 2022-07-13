import { NavLink } from "react-router-dom";
import ItemCount from "../ItemCount/ItemCount";

function CardDetail(props) {
  console.log(props.imgPath);
  console.log(props.item.id);
  console.log(props.onCount);
  console.log(props.noCount);

  return (
    props.item.id !== undefined && (
      <>
        <h1>{props.name}</h1>
        <img src={props.imgPath} alt="" className="detailImg" />
        <p>{props.item.description}</p>
        <p>{`Stock disponible: ${props.item.stock}`}</p>
        {props.noCount && (
          <ItemCount
            onCount={props.item.onCount}
            initial={props.item.initial}
            stock={props.item.stock}
            id={props.item.id}
          />
        )}
        {!props.noCount && (
          <>
            <p className="redirection">
              Su producto ha sido agregado al carrito!
            </p>
            <NavLink to="/products">
              <button>Seguir comprando</button>
            </NavLink>
            <NavLink to="/cart">
              <button>Terminar compra</button>
            </NavLink>
          </>
        )}
      </>
    )
  );
}

export default CardDetail;
