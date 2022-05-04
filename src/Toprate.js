import api, { api_key } from "./axios";
import { useEffect, useState } from "react";
import MovieList from "./MovieList";

const Toprate = () => {
  const [data, setData] = useState([]);
  const apiToprate = api.request("movie/top_rated", { params: { api_key } });

  useEffect(() => {
    const data = async () => {
      const responsetop = await apiToprate;
      setData(responsetop.data.results);
    };
    data();
  }, []);
  console.log(data);
  return <MovieList data={data} />;
};

export default Toprate; 
