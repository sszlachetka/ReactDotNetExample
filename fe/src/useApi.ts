import axios from "axios";

export default function useApi() {
  const baseUrl = process.env.REACT_APP_API_BASE_URL;
  const instance = axios.create({ baseURL: baseUrl });

  return instance;
}
