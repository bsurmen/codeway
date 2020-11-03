import axios from "axios";
import { getUserToken } from "./firebase";

export const customAxios = axios.create({
  baseURL: process.env.VUE_APP_BASE_URL,
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
