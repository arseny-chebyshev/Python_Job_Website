import "./app.css";
import { Header } from "../header/header";
import { Main } from "../../pages/main";
import { NotFound } from "../../pages/nofFound";
import { Vacancy } from "../../pages/vacancy";
import { Routes, Route } from "react-router-dom";

const App = () => {

  return (
    <div className="app">
      <Header />
      <Routes>
        <Route path="/" element={<Main />}></Route>
        <Route path="/:id" element={<Vacancy />}></Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
    </div>
  );
};
export default App;
