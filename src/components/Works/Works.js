import "./Works.css";

function Works() {
  return (
    <section class="container works" id="works">
      <h2>Works</h2>
      <div class="row worksContainer">
        <div class="col-lg-4 col-md-12 col-sm-12">
          <img
            src={require(`../../assets/Imagen-1.jpg`)}
            alt="Corte de pelo"
            class="previewImg"
          />
          <p class="worksText">
            Nuestro fuerte son los cortes de pelo y barba, y por ello nos
            enfocamos en que nuestros barberos se mantengan actualizados en
            cuanto a estilos dentro de las últimas tendencias, además de
            garantizar la máxima prolijidad.
          </p>
        </div>
        <div class="col-lg-4 col-md-12 col-sm-12">
          <img
            src={require(`../../assets/Imagen-2.jpg`)}
            alt="Navaja"
            class="previewImg"
          />
          <p class="worksText">
            Manteniendo las tradiciones de las antiguas barberías y para
            garantizar el mejor tratado para la barba, nuestros barberos cuentan
            con navajas de acero cromado, mezclando la tradicion con la
            tecnología para brindar un servicio de excelencia.
          </p>
        </div>
        <div class="col-lg-4 col-md-12 col-sm-12">
          <img
            src={require(`../../assets/Imagen-3.jpg`)}
            alt="Shaver"
            class="previewImg"
          />
          <p class="worksText">
            A su vez, disponemos de las mejores herramientas para asegurarnos de
            que su piel sea tratada de la mejor manera, contando con shavers y
            geles post afeitada.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Works;
