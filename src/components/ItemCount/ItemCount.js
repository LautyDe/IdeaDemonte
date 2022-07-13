import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";
import "./ItemCount.css";
import { useState } from "react";

function ItemCount(props) {
  const [num, setNum] = useState(parseInt(props.initial));

  const sumar = () => {
    if (num < props.stock) {
      setNum(num + 1);
    }
  };
  const resta = () => {
    if (num > 1) {
      setNum(num - 1);
    }
  };

  const onAddHandler = () => {
    props.onCount(num, props.id);
  };

  return (
    <div className="count">
      <p>{num}</p>
      <div className="countButtons">
        <button className="minusButton" onClick={resta}>
          -
        </button>
        <button className="plusButton" onClick={sumar}>
          +
        </button>
        <button className="onAdd" onClick={onAddHandler}>
          Agregar al carrito!
        </button>
      </div>
    </div>
  );
}

export default ItemCount;
