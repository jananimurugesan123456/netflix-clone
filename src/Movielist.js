import React, { useState, useEffect } from "react";

function Movielist() {
  const [Movielist, setMovielist] = useState([]);
  const data = Movielist;

  //   const apiUpcoming = api.request("movie/upcoming", { params: { api_key } });

  //   useEffect(() => {
  //     const data = async () => {
  // const url = "https://image.tmdb.org/t/p/w300/";
  //   const response = await apiUpcoming;
  //   setData(response.data.results);
  //     };
  //     data();
  //   }, []);

  //   console.log(data);
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
              <div>rating:{data.vote_average}</div>
            </div>
          </div>
        </div>
      );
    })}
  </div>;
}
export default Movielist;
