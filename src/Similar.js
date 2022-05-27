import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api, { api_key } from "./axios";

import MovieList from "./MovieList.js";
const Similar = () => {
  const { movieid } = useParams();
  const [data, setData] = useState([]);

  useEffect(() => {
    const apiSimilar = api.get(`movie/${movieid}/similar`, {
      params: { api_key },
    });
    const data = async () => {
      const response = await apiSimilar;
      console.log("response", response);
      setData(response.data.results);
    };
    data();
    console.log("similar");
  }, [movieid]);

  console.log("data", data);
  const similarslice = data.slice[(0, 5)];
  console.log("similarslice", similarslice);
  return similarslice ? (
    <MovieList data={similarslice} />
  ) : (
    <div>Loading..</div>
  );
};
export default Similar;
