
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Popular from "./Components/Popular";
import AnimeItem from "./Components/AnimeItem";
import HomePage from "./Components/HomePage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/anime/:id" element={<AnimeItem />}></Route>
      </Routes>
    </BrowserRouter>

  );
}

export default App;
