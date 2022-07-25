import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./CardDetailContainer.css";
import CardDetail from "../CardDetail/CardDetail";
import { getProduct } from "../../services/firestore";

function CardDetailContainer() {
  const params = useParams();
  const [cardFetch, setCardFetch] = useState([]);

  const fetchDetail = () => {
    getProduct(params).then((data) => {
      setCardFetch(data);
    });
  };

  useEffect(() => {
    fetchDetail();
  }, []);

  return (
    <section className="container">
      <CardDetail item={cardFetch} />
    </section>
  );
}

export default CardDetailContainer;
