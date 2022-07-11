import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";
import "./Card.css";
import { Link } from "react-router-dom";

function Card(props) {
  const imgPath = require(`../../assets${props.image}`);
  return (
    <div className="card">
      <h5>{props.name}</h5>
      <img src={imgPath} className="prevImg" />
      <p>${props.price}</p>
      <p>(Stock disponible: {props.stock})</p>
      <Link to={`/products/${props.id}`}>
        <button>Ver info</button>
      </Link>
    </div>
  );
}

export default Card;
