import styles from './closeWindow.module.css'
import {close_modal_filters} from "../../core/redux-toolkit/slices/modalSlice";
import {useDispatch} from "react-redux";

const CloseWindow = () => {
    const dispatch = useDispatch()
    return (
        <div
            onClick={() => dispatch(close_modal_filters())}
            className={styles.close}
        >
            ×
        </div>
    );
};

export default CloseWindow;