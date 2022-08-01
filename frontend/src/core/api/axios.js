import axios from "axios";
import { BaseURL } from "../constants/api";
const def = axios.create({
  baseURL: BaseURL,
});

export default def;
