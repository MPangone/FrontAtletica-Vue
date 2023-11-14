import axios, {AxiosInstance} from "axios";

const api: AxiosInstance = axios.create({
  baseURL:"https://localhost:7183/",
});


export default api;