import "./HomeServices.css";

function HomeServices() {
  return (
    <section class="container services" id="services">
      <h2>Services</h2>
      <div class="row">
        <div class="col-lg-6 col-md 6 col-sm-12">
          <div class="servicesVideo">
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/hesVvQLMYTU"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
        </div>
        <div class="col-lg-6 col-md-6 col-sm-12 servicesText">
          <p>
            En BarberStyle no solo importa el corte de pelo y pelo barba,
            tambien importa la calidad de la atencion que brindamos, una vez que
            ingrese al local, mientras espera podra distenderse y pasar un buen
            rato. En cuanto a lo que hacemos, nos especializamos en todo lo que
            es cortes de pelo y de barba con los maximos estandares de calidad,
            ademas de ofrecer todos los productos necesarios para el cuidado de
            su imagen.
          </p>
        </div>
      </div>
    </section>
  );
}

export default HomeServices;
