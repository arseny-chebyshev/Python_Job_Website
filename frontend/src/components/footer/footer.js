import styles from "./footer.module.css";
import Links from "../links/links";

const Footer = () => {
    return (
        <div className={styles.root}>
            <div className={styles.links}>
                <div className={styles.title}>
                    devseye
                </div>
                <Links/>
            </div>

            <div className={styles.author}>
                <div className={styles.icon}>©</div>
                <div className={styles.author_title}> 2022 DEVSEYE</div>
            </div>
        </div>
    );
};
export {Footer};
