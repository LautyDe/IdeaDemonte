import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemCount from "./ItemCount";
import "./CardDetail.css";

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

  const imgPath = require(`../assets${cardFetch[0].image}`);

  return (
    <section className="container">
      {cardFetch.length !== 0 && <h1>{cardFetch[0].name}</h1>}
      {cardFetch.length !== 0 && <img src={imgPath} className="detailImg" />}
      {cardFetch.length !== 0 && <p>{cardFetch[0].description}</p>}
      {cardFetch.length !== 0 && (
        <p>{`Stock disponible: ${cardFetch[0].stock}`}</p>
      )}
      {cardFetch.length !== 0 && (
        <ItemCount initial={cardFetch[0].initial} stock={cardFetch[0].stock} />
      )}
    </section>
  );
}

export default CardDetail;
