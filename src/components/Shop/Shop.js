import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";
import "./Shop.css";
import { useEffect, useState } from "react";
import Card from "../Card/Card";
import { getAllProducts } from "../../services/firestore";

function Shop() {
  const [info, setInfo] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);

    setTimeout(() => {
      getAllProducts().then((data) => {
        setIsLoading(false);
        setInfo(data);
      });
    }, 1000);
  }, []);

  clearTimeout();

  return (
    <section className="cuerpo">
      <div>
        <h2 className="title">Catalogo</h2>
        <p className="intro">Mira nuestros productos!</p>
        {isLoading && <p className="loading">Loading...</p>}
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

export default Shop;
