import styles from "./app.module.css";
import {Header} from "../header/header";
import {Footer} from "../footer/footer";
import {Main} from "../../pages/main/main";
import {NotFound} from "../../pages/notFound/nofFound";
import {Vacancy} from "../../pages/vacancy/vacancy";
import {Routes, Route} from "react-router-dom";

const App = () => {
    return (
        <div className={styles.root}>
            <Header/>
            <div className={styles.app}>
                <Routes>
                    <Route path="/" element={<Main/>}></Route>
                    <Route path="/vacancy/:id" element={<Vacancy/>}></Route>
                    <Route path="*" element={<NotFound/>}></Route>
                </Routes>
            </div>
            <Footer/>
        </div>
    );
};
export default App;
