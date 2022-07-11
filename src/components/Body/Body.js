import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";
import "./Body.css";
import { useEffect, useState } from "react";
import Card from "../Card/Card";

function Body() {
  const [info, setInfo] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      fetch("data.json")
        .then((resp) => resp.json())
        .then((data) => setInfo(data));
    }, 1000);
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
              description={i.description}
              image={i.image}
              id={i.id}
            />
          ))}
      </div>
    </section>
  );
}

export default Body;
