import "./Reviews.css";

function Reviews() {
  return (
    <section id="reviews" class="reviews">
      <h2>Reviews</h2>
      <div class="container">
        <div class="row">
          <div class="col col-xl-4 col-lg-4 col-md-12 col-sm-12 reviewContainer">
            <p class="reviewText">
              @juancarlos23: "Excelente atencion y cortes de pelo del mejor
              nivel"
            </p>
            <img
              src={require("../../assets/5-Estrellas.png")}
              alt="5 estrellas"
              class="starsImg"
            />
          </div>
          <div class="col col-xl-4 col-lg-4 col-md-12 col-sm-12 reviewContainer">
            <p class="reviewText">
              @LucasGonzi: "Excelentes cortes de pelo, el peluquero un genio!"
            </p>
            <img
              src={require("../../assets/4-Estrellas.png")}
              alt="4 estrellas"
              class="starsImg"
            />
          </div>
          <div class="col col-xl-4 col-lg-4 col-md-12 col-sm-12 reviewContainer">
            <p class="reviewText">
              @lautydemonte: "Excelente la play junto con el mini bar para
              esperar al turno."
            </p>
            <img
              src={require("../../assets/5-Estrellas.png")}
              alt="5 estrellas"
              class="starsImg"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Reviews;
