import Navbar from "./components/Navbar";
import ItemListContainer from "./components/ItemListContainer";
import ItemCount from "./components/ItemCount";

function App() {
  return (
    <div>
      <Navbar />
      <ItemListContainer />
      <ItemCount stock="6" initial="0" />
      <ItemCount stock="4" initial="0" />
      <ItemCount stock="5" initial="0" />
    </div>
  );
}

export default App;
