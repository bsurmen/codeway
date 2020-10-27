import axios from "axios";
import URL from "../lib/url";

export default axios.create({
  baseURL: URL.baseURL,
});
