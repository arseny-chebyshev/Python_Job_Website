import styles from './SmileAndInfo.module.scss'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";


const SmileAndInfo = ({info,smile}) => {
    return (
            <div className={styles.root}>
                <div><FontAwesomeIcon className={styles.smile} icon={smile}/></div>
                <div>{info}</div>
            </div>
    );
};

export default SmileAndInfo;