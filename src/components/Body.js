import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";
import "./Body.css";
import { useEffect, useState } from "react";
import Card from "./Card";

function Body() {
  const [info, setInfo] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      fetch("data.json")
        .then((resp) => resp.json())
        .then((data) => setInfo(data));
    }, 2000);
  }, []);

  return (
    <section className="cuerpo">
      <div>
        <h2>Catalogo</h2>
        <p>Mira nuestros productos!</p>
      </div>
      <div className="catalogo">
        {info &&
          info.map((i) => (
            <Card
              name={i.name}
              price={i.price}
              stock={i.stock}
              initial={i.initial}
            />
          ))}
      </div>
    </section>
  );
}

export default Body;
