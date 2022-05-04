import React from "react";

function MovieList({ data }) {
  return (
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
    </div>
  );
}
export default MovieList;
