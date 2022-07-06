import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./CardDetail.css";
import ItemCount from "./ItemCount";

function CardDetail() {
  const params = useParams();

  const [cardFetch, setCardFetch] = useState([]);

  const fetchDetail = () => {
    fetch("../data.json")
      .then((response) => response.json())
      .then((data) => {
        setCardFetch(data.filter((i) => i.id == params.id));
      });
  };

  useEffect(() => {
    fetchDetail();
  }, []);

  return (
    <section className="container">
      {cardFetch.length !== 0 && <h1>{cardFetch[0].name}</h1>}
      {cardFetch.length !== 0 && <p>{cardFetch[0].description}</p>}
      {cardFetch.length !== 0 && (
        <p>{`Stock disponible: ` + cardFetch[0].stock}</p>
      )}
      {cardFetch.length !== 0 && (
        <div className="count">
          <ItemCount
            initial={cardFetch[0].initial}
            stock={cardFetch[0].stock}
          />
        </div>
      )}
    </section>
  );
}

export default CardDetail;
