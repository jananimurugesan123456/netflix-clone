import React, { useEffect, useState } from "react";
import api, { api_key } from "./axios";
import MovieList from "./MovieList";

const FavoriteMovie = () => {
  console.log("hi");
  const [favorite, setFavorite] = useState([]);
  const apiFavorite = api.request("movie/upcoming", { param: { api_key } });

  useEffect(() => {
    const data = async () => {
      const response = await apiFavorite;
      setFavorite(response.data.results);
    };
    data();
  }, []);

  return (
    <div>
      FavoriteMovie
      <MovieList data={favorite} />
    </div>
  );
};

export default FavoriteMovie;
