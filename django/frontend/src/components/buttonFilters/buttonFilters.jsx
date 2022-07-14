import {open_modal_filters} from "../../core/redux-toolkit/slices/modalSlice";
import styles from './buttonFilters.module.css'
import FilterIcon from "../../assets/image/filters/FadersHorizontal.svg";
import {useCountFiters} from "../../core/hooks/useCountFilters";
import {useDispatch} from "react-redux";

const ButtonFilters = () => {

    const {countFilters} = useCountFiters();

    const dispatch = useDispatch();

    return (
        <div
            onClick={() => dispatch(open_modal_filters())}
            className={styles.filters}
        >
            {countFilters ? (
                <div className={styles.count_wrap}>
                    <div className={styles.count}>{countFilters}</div>
                </div>
            ) : (
                <div>
                    <img src={FilterIcon} className={styles.filter_icon}/>
                </div>
            )}
            <div>Фильтры</div>
        </div>
    );
};

export default ButtonFilters;