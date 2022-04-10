import { useAcquireAccessToken } from "authentication";
import axios from "axios";

export default function useApi() {
  const baseUrl = process.env.REACT_APP_API_BASE_URL;
  const instance = axios.create({ baseURL: baseUrl });
  const acquireAccessToken = useAcquireAccessToken();

  instance.interceptors.request.use(async config => {
    const accessToken = await acquireAccessToken();

    return {
      ...config,
      headers: {
        ...config.headers,
        authorization: `Bearer ${accessToken}`,
      },
    };
  });

  return instance;
}
