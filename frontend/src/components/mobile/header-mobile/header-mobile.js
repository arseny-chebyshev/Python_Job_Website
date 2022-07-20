import {faBars} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {useState} from "react";
import {Title} from "../../title/title";
import {BurgerMenu} from "../burger-menu/burger-menu";
import styles from "./header-mobile.module.css";
import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {open_burger} from "../../../core/redux-toolkit/slices/modalSlice";

const HeaderMobile = () => {
    const active = useSelector(state => state.modal.modal_burger)
    const dispatch = useDispatch()
    const [small, setSmall] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", () =>
            setSmall(window.pageYOffset > 34)
        );
    }, []);


    return (
        <>
            <div className={small ? styles.header_mobile:`${styles.header_mobile} ${styles.border}`}>
                <FontAwesomeIcon
                    icon={faBars}
                    className={styles.burger_сlick}
                    onClick={() => dispatch(open_burger())}
                />
                <div className={styles.title}>
                    <Title/>
                </div>
            </div>
            <BurgerMenu menu={active} setMenu={() => dispatch(open_burger())}/>
        </>
    );
};
export {HeaderMobile};

