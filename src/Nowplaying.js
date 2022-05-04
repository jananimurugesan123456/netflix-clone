import api, { api_key } from "./axios";
import { useEffect, useState } from "react";
import MovieList from "./MovieList";

const Nowplaying = () => {
  const [data, setData] = useState([]);

  const apiNowplaying = api.request("movie/now_playing", {
    params: { api_key },
  });

  useEffect(() => {
    const data = async () => {
      const responsenow = await apiNowplaying;
      setData(responsenow.data.results);
    };
    data();
  }, []);

  console.log(data);
  return <MovieList data={data} />;
};

export default Nowplaying;
