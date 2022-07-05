import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";
import "./Card.css";
import ItemCount from "./ItemCount";
import Swal from "sweetalert2";

function Card(props) {
  const imgPath = require(`../assets/${props.image}`);
  return (
    <div className="card">
      <h5>{props.name}</h5>
      <p>${props.price}</p>
      <p>(Stock disponible: {props.stock})</p>
      <button
        onClick={() => {
          Swal.fire({
            title: `${props.name}`,
            text: `${props.description}`,
            icon: `${props.image}`,
            confirmButtonText: "Agregar al carrito",
            showCancelButton: true,
            confirmButtonText: "Agregar al carrito",
            imageUrl: `${imgPath}`,
            imageWidth: 320,
            imageHeight: 280,
            imageAlt: "Custom image",
          }).then((result) => {
            if (result.isConfirmed) {
              Swal.fire("Agregado al carrito!", "", "success");
            }
          });
        }}
      >
        Ver info
      </button>
      <div>
        <ItemCount initial={props.initial} stock={props.stock} />
      </div>
    </div>
  );
}

export default Card;
