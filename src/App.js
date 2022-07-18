import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";
import Navbar from "./components/NavBar/Navbar";
import Home from "./components/Home/Home";
import { Route, Routes } from "react-router-dom";
import CartView from "./components/Cart/CartView";
import NotFound from "./components/NotFound/NotFound";
import CardDetailContainer from "./components/CardDetailContainer/CardDetailContainer";
import Shop from "./components/Shop/Shop";

function App() {
  return (
    <div className="generals">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/shop" element={<Shop />}></Route>
        <Route path="/products/:id" element={<CardDetailContainer />}></Route>
        <Route path="/cart" element={<CartView />}></Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
    </div>
  );
}

export default App;
