import React from "react";
import { Link } from "react-router-dom";

function MovieList({ data }) {
  return (
    <div class="first">
      {data.map((data) => {
        return (
          <Link to={`/movies/${data.id}`}>
            <div class="total">
              <div class="common">
                <div class="image">
                  <img
                    src={`https://image.tmdb.org/t/p/w300/${data.poster_path}`}
                    alt=""
                  />
                </div>
                <div class="details">
                  <a class="hover">movieid:{data.id}</a>
                  <div class="id">movieid: {data.id} </div>
                  <div class="movie">moviename:{data.title}</div>
                  <div class="average">rating:{data.vote_average}</div>
                </div>
              </div>
            </div>
          </Link>
        );
      })}
    </div>
  );
}
export default MovieList;
