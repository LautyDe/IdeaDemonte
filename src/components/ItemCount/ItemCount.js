import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";
import "./ItemCount.css";
import { useState } from "react";

function ItemCount(props) {
  const [count, setCount] = useState(parseInt(props.initial));

  const sumar = () => {
    if (count < props.stock) {
      setCount(count + 1);
    }
  };
  const resta = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  return (
    <div className="count">
      <p>{count}</p>
      <div className="countButtons">
        <button className="minusButton" onClick={resta}>
          -
        </button>
        <button className="plusButton" onClick={sumar}>
          +
        </button>
        <button className="onAdd" onClick={() => props.onAdd(count)}>
          Agregar al carrito!
        </button>
      </div>
    </div>
  );
}

export default ItemCount;
