import FAQ from "../FAQ/FAQ";
import HomeServices from "../HomeServices/HomeServices";
import Reviews from "../Reviews/Reviews";
import Works from "../Works/Works";
import "./Home.css";

function Home() {
  return (
    <section className="containerA" id="start">
      <HomeServices />
      <Works />
      <FAQ />
      <Reviews />
    </section>
  );
}

export default Home;
