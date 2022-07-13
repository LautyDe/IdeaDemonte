import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";
import Navbar from "./components/NavBar/Navbar";
import Home from "./components/Home/Home";
import { Route, Routes } from "react-router-dom";
import Products from "./components/Products/Products";
import Cart from "./components/Cart/Cart";
import NotFound from "./components/NotFound/NotFound";
import CardDetail from "./components/CardDetail/CardDetail";
import CardDetailContainer from "./components/CardDetailContainer/CardDetailContainer";

function App() {
  return (
    <div className="generals">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/products" element={<Products />}></Route>
        <Route path="/products/:id" element={<CardDetailContainer />}></Route>
        <Route path="/cart" element={<Cart />}></Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
    </div>
  );
}

export default App;
