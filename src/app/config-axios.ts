import axios from "axios";

const Axios = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  params: {
    api_key: import.meta.env.VITE_TMDB_API_KEY,
  },
});
export default Axios;
