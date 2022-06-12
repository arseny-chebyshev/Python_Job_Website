import "./app.css";
import { Header } from "../header/header";
import { Field } from "../field/field";
import { useTheme } from "../hooks/useTheme";

const App = () => {
  const {theme,setTheme} = useTheme(false)
  return (
    <div className="app">
      <Header />
      <button onClick={() => setTheme(!theme)}>111111</button>
      <p className="app__title">Найди работу прямо сейчас</p>
      <Field></Field>
    </div>
  );
};

export default App;
