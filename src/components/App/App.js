import "./app.css";
import { Header } from "../header/header";
import { Field } from "../field/field";
import { Card } from "../card/card";

const App = () => {
  const vacancy = [
    {
      role: "React Native Developer",
      salary: "от 50 000",
      mode: "Полный день, удалённая работа",
      location: "Россия, Москва",
      techology: [
        "ReactJSReactJSReactJSReactJSReactJSReactJSReactJS", 
        "NodeJs", 
        "NodeJs", 
        "NodeJs", 
        "NodeJs", 
        "NodeJs", 
        "NodeJs", 
        "Docker"],
    },
    {
      role: "Python Developer ",
      salary: "от 100 000 до 150 000",
      mode: "Частичная занятость, удалённая работа",
      location: "Беларусь, Минск",
      techology: ["Python", "Django"],
    },
    {
      role: " JavaScript developer",
      salary: "от 90 000 до 130 000",
      mode: "Полный день, офис",
      location: "Россия, Казань",
      techology: ["JS ES6+", "Angular", "Redux"],
    },
  ];
  return (
    <div className="app">
      <Header />
      <div className="app__title">Найди работу прямо сейчас</div>
      <Field>
        {vacancy.map((el) => (
          <Card
            role={el.role}
            salary={el.salary}
            mode={el.mode}
            location={el.location}
            technology={el.techology}
          />
        ))}
      </Field>
    </div>
  );
};

export default App;
