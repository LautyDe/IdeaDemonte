import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";
import "./Card.css";
import ItemCount from "./ItemCount";

function Card(props) {
  return (
    <div className="card">
      <h5>{props.name}</h5>
      <p>{props.price}</p>
      <p>(Stock disponible: {props.stock})</p>
      <button>Ver info</button>
      <div>
        <ItemCount initial={props.initial} stock={props.stock} />
      </div>
    </div>
  );
}

export default Card;
