import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemCount from "./ItemCount";
import "./CardDetail.css";

function CardDetail() {
  const params = useParams();
  const [imgPath, setImgPath] = useState("");
  const [cardFetch, setCardFetch] = useState([]);

  const fetchDetail = () => {
    fetch("../data.json")
      .then((response) => response.json())
      .then((data) => {
        let dataFetch = data.find((i) => i.id == params.id);
        setCardFetch(dataFetch);
        let requireImg = require(`../assets${dataFetch.image}`);
        setImgPath(requireImg);
      });
  };

  useEffect(() => {
    fetchDetail();
  }, []);

  return (
    <section className="container">
      {cardFetch.id !== undefined && (
        <>
          <h1>{cardFetch.name}</h1>
          <img src={imgPath} alt="" className="detailImg" />
          <p>{cardFetch.description}</p>
          <p>{`Stock disponible: ${cardFetch.stock}`}</p>
          <ItemCount initial={cardFetch.initial} stock={cardFetch.stock} />
        </>
      )}
    </section>
  );
}

export default CardDetail;
