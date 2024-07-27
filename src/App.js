
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Popular from "./Components/Popular";
import AnimeItem from "./Components/AnimeItem";
import HomePage from "./Components/HomePage";
import Character from "./Components/Character";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/anime/:id" element={<AnimeItem />}></Route>
        <Route path="/character/:id" element={<Character />}></Route>
      </Routes>
    </BrowserRouter>

  );
}

export default App;
