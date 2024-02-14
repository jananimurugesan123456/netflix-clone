import React, { useEffect, useState } from "react";
import api, { api_key } from "./axios";
import { useParams } from "react-router-dom";
// import { wait } from "@testing-library/user-event/dist/utils";
import Getcredits from "./Getcredits";
const Credits = () => {
  const { movieid } = useParams();
  const [data, setData] = useState([]);
  useEffect(() => {
    const apiname = api.get(`movie/${movieid}/credits`, {
      params: { api_key },
    });

    const data = async () => {
      const response = await apiname;
      setData(response.data.cast);
    };
    data();
  }, [movieid]);
  const dataslice = data.slice(0, 5);
  return <Getcredits actorsname={dataslice} />;
};
export default Credits;
