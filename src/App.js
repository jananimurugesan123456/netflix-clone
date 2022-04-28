import logo from "./logo.svg";
import "./App.css";
import api, { api_key } from "./axios";
import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Upcoming from "./Upcoming";
import Movielist from "./Movielist";

function App() {
  const [data, setData] = useState([]);

  const apiUpcoming = api.request("movie/upcoming", { params: { api_key } });

  useEffect(() => {
    const data = async () => {
      // const url = "https://image.tmdb.org/t/p/w300/";
      const response = await apiUpcoming;
      setData(response.data.results);
    };
    data();
  }, []);

  console.log(data);

  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
      {/* <h1>Bookkeeper</h1> */}
      <nav>
        <BrowserRouter>
          <nav>
            <a href="/moviedetails/upcoming">upcoming</a>
          </nav>
          <Routes>
            <Route path="/moviedetails/upcoming" element={<upcoming />}></Route>
            <Route path="/" element={<Upcoming />}></Route>
          </Routes>
        </BrowserRouter>
      </nav>
      <div class="first">
        {data.map((data) => {
          return (
            <div class="total">
              <div class="common">
                <div class="image">
                  <img
                    src={`https://image.tmdb.org/t/p/w300/${data.poster_path}`}
                    alt=""
                  />
                </div>
                <div class="details">
                  <div>movieid: {data.id} </div>
                  <div class="movie">moviename:{data.title}</div>
                  {/* <div>overview:{data.overview}</div> */}
                  <div>rating:{data.vote_average}</div>
                  {/* <img
                      src={`https://image.tmdb.org/t/p/w300/${data.poster_path}`}
                    /> */}
                </div>
              </div>
            </div>
          );
          // <Upcoming />;
        })}
      </div>
      {/* </header> */}
      {/* </nav> */}
      {/* <nav /> */}
    </div>
  );
}

export default App;
