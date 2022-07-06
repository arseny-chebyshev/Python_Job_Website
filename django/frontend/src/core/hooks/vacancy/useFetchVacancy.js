import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

export const useFetchVacancy = () => {
  const { id } = useParams();
  const [vacancy, setVacancy] = useState({});
  const [technologies, setTechnologies] = useState();
  const [addVacancy, setAddVacancy] = useState();
  const url = `http://localhost:8000/api/vacancy/${id}/`;
  const urlAdd = `http://localhost:8000/api/vacancy/?&technologies=${technologies}`;

  const fetchAsycn = async () => {
    const { data } = await axios(url);
    setVacancy(data);
    setTechnologies(data.technologies[0]);
    window.scrollTo(0, 0);
    console.log(data.technologies[0]);
  };
  const fetchAsycnAdd = async () => {
    console.log(technologies);
    const add = await axios(urlAdd);
    setAddVacancy(add.data.results);
    console.log(add.data.results);
  };

  const fetchAsyncAll = () => {};

  useEffect(() => {
    fetchAsycn().then(() => fetchAsycnAdd());
  }, []);

  return { vacancy, addVacancy };
};
