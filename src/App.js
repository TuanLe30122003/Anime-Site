
import Popular from "./Components/Popular";
import { useGlobalContext } from "./context/GlobalContext";

function App() {

  const global = useGlobalContext();

  return (
    <div className="App">
      <Popular />
    </div>
  );
}

export default App;
