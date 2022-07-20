import styles from './Message.module.css'
import {errorMessage} from "../../core/constants/info";


const Message = () => {
    return (
        <div className={styles.message_root}>
            <div className={styles.message_title}>Сообщить о проблеме</div>
            <div className={styles.message_description}>
                {errorMessage}
            </div>
        </div>
    );
};

export default Message;