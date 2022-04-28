import axios from "axios";
const BASE_URL = "https://api.themoviedb.org/3";
export const api_key = "dedad5f47745f5aed607321fc218fd8f";
//create function ku url anuppurom
const api = axios.create({ baseURL: BASE_URL });
// api.interceptors.request.use((config) => {
//   config.params = config.param || {};
//   config.params["api_key"] = api_key;
//   return config;
// });
export default api;
