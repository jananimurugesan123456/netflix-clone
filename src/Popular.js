import api, { api_key } from "./axios";
import { useEffect, useState } from "react";
import MovieList from "./MovieList";

const Popular = () => {
  const [data, setData] = useState([]);
  const apiPopular = api.request("movie/popular", { params: { api_key } });

  useEffect(() => {
    const data = async () => {
      const responsepo = await apiPopular;
      setData(responsepo.data.results);
    };
    data();
  }, []);

  console.log(data);
  return <MovieList data={data} />;
};

export default Popular;
