import "./app.css";
import { Header } from "../header/header";
import { Field } from "../field/field";


const App = () => {
  return (
    <div className="app">
      <Header />
      <p className="app__title">Найди работу прямо сейчас</p>
      <Field></Field>
    </div>
  );
};

export default App;
