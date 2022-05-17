import Popular from "./Popular";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Upcoming from "./Upcoming";
import Toprate from "./Toprate";
import Nowplaying from "./Nowplaying";
import Moviedetails from "./Moviedetails";

function App() {
  return (
    <div className="App">
      <nav>
        <BrowserRouter>
          <nav class="top">
            <a href="/movies/upcoming">upcoming</a>
            <a href="/movies/popular">popular</a>
            <a href="/movies/toprated">toprate</a>
            <a href="/movie/nowplaying">nowplaying</a>
          </nav>
          {/* 
          <select class="topchanges">
            <option class value="upcoming">
              upcoming
            </option>
            <option>popular</option>
          </select> */}

          <Routes>
            <Route path="/movies/upcoming" exact element={<Upcoming />}></Route>
            <Route path="/movies/popular" exact element={<Popular />}></Route>
            <Route path="/movies/toprated" exact element={<Toprate />}></Route>
            <Route
              path="/movie/nowplaying"
              exact
              element={<Nowplaying />}
            ></Route>
            <Route path="/movies/:movieid" element={<Moviedetails />}></Route>
          </Routes>
        </BrowserRouter>
      </nav>
    </div>
  );
}

export default App;
