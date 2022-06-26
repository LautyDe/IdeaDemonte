import Navbar from "./components/Navbar";
import ItemListContainer from "./components/ItemListContainer";
import Contador from "./components/ItemCount";
import ItemCount from "./components/ItemCount";

function App() {
  return (
    <div>
      <Navbar />
      <ItemListContainer />
      <ItemCount />
    </div>
  );
}

export default App;
