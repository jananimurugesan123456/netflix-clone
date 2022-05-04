import Popular from "./Popular";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Upcoming from "./Upcoming";
import Toprate from "./Toprate";
import Nowplaying from "./Nowplaying";

function App() {
  return (
    <div className="App">
      <nav>
        <BrowserRouter>
          <nav>
            <a href="/movies/upcoming">upcoming</a>
            <a href="/movies/popular">popular</a>
            <a href="/movies/toprated">toprate</a>
            <a href="/movie/nowplaying">nowplaying</a>
          </nav>
          <Routes>
            <Route path="/movies/upcoming" element={<Upcoming />}></Route>
            <Route path="/movies/popular" element={<Popular />}></Route>
            <Route path="/movies/toprated" element={<Toprate />}></Route>
            <Route path="/movie/nowplaying" element={<Nowplaying />}></Route>
          </Routes>
        </BrowserRouter>
      </nav>
    </div>
  );
}

export default App;
