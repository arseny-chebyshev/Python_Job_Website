import axios from "axios";

const def = axios.create({
  baseURL: "`http://localhost:8000/api/vacancy/",
});

export default def;
