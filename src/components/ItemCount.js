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
    if (num > 0) {
      setNum(num - 1);
    }
  };
  const reiniciar = () => {
    setNum(0);
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
        <button className="restartButton" onClick={reiniciar}>
          Reiniciar
        </button>
      </div>
    </div>
  );
}

export default ItemCount;
