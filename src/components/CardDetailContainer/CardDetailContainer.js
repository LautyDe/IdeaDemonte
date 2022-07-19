import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./CardDetailContainer.css";
import CardDetail from "../CardDetail/CardDetail";
import { getProduct } from "../../services/firestore";

function CardDetailContainer() {
  const params = useParams();
  const [cardFetch, setCardFetch] = useState([]);
  const [imgPath, setImgPath] = useState();

  const fetchDetail = () => {
    fetch("../data.json")
      .then((response) => response.json())
      .then((data) => {
        let dataFetch = data.find((i) => i.id == params.id);
        setCardFetch(dataFetch);
        let requireImg = require(`../../assets${dataFetch.image}`);
        setImgPath(requireImg);
      });
  };

  useEffect(() => {
    fetchDetail();
  }, []);

  return (
    <section className="container">
      <CardDetail imgPath={imgPath} item={cardFetch} />
    </section>
  );
}

export default CardDetailContainer;
