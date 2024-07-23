
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Popular from "./Components/Popular";
import AnimeItem from "./Components/AnimeItem";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Popular />}></Route>
        <Route path="/anime/:id" element={<AnimeItem />}></Route>
      </Routes>
    </BrowserRouter>

  );
}

export default App;
