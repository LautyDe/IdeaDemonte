import FAQ from "../FAQ/FAQ";
import HomeServices from "../HomeServices/HomeServices";
import Reviews from "../Reviews/Reviews";
import Works from "../Works/Works";
import "./Home.css";

function Home() {
  return (
    <main>
      <HomeServices />
      <Works />
      <FAQ />
      <Reviews />
    </main>
  );
}

export default Home;
