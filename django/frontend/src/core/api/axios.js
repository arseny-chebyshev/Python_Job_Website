import axios from "axios";

const def = axios.create({
  baseURL: "`http://185.104.113.54:8000/api/vacancy/",
});

export default def;
