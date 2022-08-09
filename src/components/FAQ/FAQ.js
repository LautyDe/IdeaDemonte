import "./FAQ.css";

function FAQ() {
  return (
    <section class=" faq" id="faq">
      <h2>FAQ</h2>
      <div class="row ">
        <div class="col-lg-4 col-md-3 col-sm-12 faqContainer container">
          <h3 class="faqTitle">Medios de pago:</h3>
        </div>
        <div class="col-lg-8 col-md-9 col-sm-12">
          <p class="faqText">
            En BarberStyle aceptamos Mercado Pago, Visa, MasterCard, Emerican
            Express, Lemon, y criptos.
          </p>
        </div>
      </div>
      <div class="row ">
        <div class="col-lg-4 col-md-3 col-sm-12 faqContainer">
          <h3 class="faqTitle">Stock de productos del shop:</h3>
        </div>
        <div class="col-lg-8 col-md-9 col-sm-12">
          <p class="faqText">
            Si, todos los productos que publicamos estan en stock. En caso de
            estar publicado y no tener stock, al final de la compra saldra
            cancelada. En ese caso puede contactarnos por mail a ventas@BS.com
            Hacemos el mayor esfuerzo para mantener nuestro shop actualizado, en
            caso de no tenerlo le pedimos disculpas, contactenos al mail y
            buscaremos la solucion.
          </p>
        </div>
      </div>

      <div class="row ">
        <div class="col-lg-4 col-md-3 col-sm-12 faqContainer">
          <h3 class="faqTitle">Descuentos:</h3>
        </div>
        <div class="col-lg-8 col-md-9 col-sm-12">
          <p class="faqText">
            En Barber Style contamos con un sistema de descuentos muy especial,
            luego de cortarse el pelo con nosotros dentro del rango de 3 veces
            cada dos meses durante 6 meses seguidos, podra acceder a nuestra
            tarjeta VIP, contando con descuentos exclusivos.
          </p>
        </div>
      </div>
    </section>
  );
}

export default FAQ;
