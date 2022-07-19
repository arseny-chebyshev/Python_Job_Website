import styles from "./buttonLink.module.css";
import {faArrowUpRightFromSquare} from "@fortawesome/free-solid-svg-icons"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const ButtonLink = ({channel_id, message_id}) => {

    const url = `https://t.me/${channel_id}/${message_id}/`;


    return (
        <a href={url} className={styles.button}>
            Откликнуться
            <span className={styles.icon}><FontAwesomeIcon icon={faArrowUpRightFromSquare}/></span>
        </a>
    );
};
export {ButtonLink};

