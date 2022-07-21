import styles from './links.module.css'
import {Link} from "react-router-dom";

const Links = () => {
    return (
        <div className={styles.links}>
            <Link className ={styles.link} to={'/about-us'}>О нас</Link>
            <Link className ={styles.link} to={'/report-a-problem'}>Cообщить о проблеме</Link>
        </div>
    );
};

export default Links;