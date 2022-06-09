import "./app.css";
import { Header } from "../header/header";
import { Field } from "../field/field";
import { Card } from "../card/card";

const App = () => {
  const vacancy = [
    {
      role: "React Native Developer",
      salary: "от 50 000",
      level:"Junior",
      mode: "Полный день, удалённая работа",
      location: "Россия, Москва",
      techology: ["ReactJS", "Docker"],
    },
    {
      role: "Python Developer ",
      salary: "от 100 000 до 150 000",
      level:"Junior",
      mode: "Частичная занятость, удалённая",
      location: "Беларусь, Минск",
      techology: ["Python", "Django"],
    },
    {
      role: " JavaScript developer",
      salary: "от 90 000 до 130 000",
      level:"Junior",
      mode: "Полный день, офис",
      location: "Россия, Казань",
      techology: ["JS ES6+", "Angular", "Redux"],
    },
  ];
  return (
    <div className="app">
      <Header />
      <p className="app__title">Найди работу прямо сейчас</p>
      <Field>
        {vacancy.map((el) => (
          <Card
            role={el.role}
            salary={el.salary}
            mode={el.mode}
            location={el.location}
            technology={el.techology}
            level={el.level}
          />
        ))}
      </Field>
    </div>
  );
};

export default App;
