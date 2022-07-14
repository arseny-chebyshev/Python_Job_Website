import styles from "./app.module.css";
import {Header} from "../header/header";
import {Footer} from "../footer/footer";
import {Main} from "../../pages/main/main";
import {NotFound} from "../../pages/notFound/nofFound";
import {Vacancy} from "../../pages/vacancy/vacancy";
import {Routes, Route, useLocation} from "react-router-dom";
import AboutUs from "../../pages/AboutUs/AboutUs";
import Message from "../../pages/Message/Message";
import {useDispatch} from "react-redux";
import {useEffect} from "react";
import {burger_close} from "../../core/redux-toolkit/slices/modalSlice";

const App = () => {
    const location = useLocation()

    const  dispatch = useDispatch()

    useEffect(() => {
        dispatch(burger_close())
    },[location])


    useEffect(() => {
        window.scrollTo(0, 0);

    },[location])




    return (
        <div className={styles.root}>
            <Header/>
            <div className={styles.app}>
                <Routes>
                    <Route path="/" element={<Main/>}></Route>
                    <Route path="/vacancy/:id" element={<Vacancy/>}></Route>
                    <Route path="*" element={<NotFound/>}></Route>
                    <Route path="/about-us" element={<AboutUs/>}></Route>
                    <Route path="/report-a-problem" element={<Message/>}></Route>
                </Routes>
            </div>
            <Footer/>
        </div>
    );
};
export default App;
