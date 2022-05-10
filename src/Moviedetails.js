import { useState } from "react";
import { useParams } from "react-router-dom";
import api, { api_key } from "./axios";
import { useEffect } from "react";
import GetMovieDetails from "./GetMovieDetails";

const Moviedetails = () => {
  const { movieid } = useParams();
  const [data, setData] = useState([]);
  const apiDetails = api.get(`movie/${movieid}`, { params: { api_key } });

  useEffect(() => {
    const data = async () => {
      const response = await apiDetails;
      setData(response.data);
    };
    data();
  }, [movieid]);

  return <GetMovieDetails moviedata={data} />;
};
export default Moviedetails;
