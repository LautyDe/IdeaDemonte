import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";
import "./ItemCount";
import { useState } from "react";

function ItemCount(props) {
  const [num, setNum] = useState(0);
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
    <>
      <p>{num}</p>
      <button onClick={resta}>-</button>
      <button onClick={sumar}>+</button>
      <button onClick={reiniciar}>Reiniciar</button>
    </>
  );
}

export default ItemCount;
