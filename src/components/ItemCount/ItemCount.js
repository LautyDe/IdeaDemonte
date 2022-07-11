import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";
import "./ItemCount.css";
import { useState } from "react";
import { NavLink } from "react-router-dom";

function ItemCount(props) {
  const [num, setNum] = useState(parseInt(props.initial));

  const sumar = () => {
    if (num < props.stock) {
      setNum(num + 1);
    }
  };
  const resta = () => {
    if (num > 0) {
      setNum(num - 1);
    }
  };

  const onAddHandler = (event) => {
    event.props.onCount(false);
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
        <NavLink to="/cart">
          <button className="onAdd" onClick={onAddHandler}>
            Agregar al carrito!
          </button>
        </NavLink>
      </div>
    </div>
  );
}

export default ItemCount;
