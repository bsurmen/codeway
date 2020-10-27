import axios from "axios";
import URL from "../lib/url";
import { getUserToken } from "./firebase";

export const customAxios = axios.create({
  baseURL: URL.baseURL,
});

customAxios.interceptors.request.use(
  async (config) => {
    if (!config.headers.Authorization) {
      const token = await getUserToken();

      if (token) {
        config.headers.Authorization = token;
      }
    }

    return config;
  },
  (error) => Promise.reject(error)
);
