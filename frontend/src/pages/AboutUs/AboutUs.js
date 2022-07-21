import styles from './AboutUs.module.scss'

const AboutUs = () => {
    return (
        <div className={styles.about_wrap}>
            <h1>
                Авторы:
            </h1>
            <div className={styles.info}>
                <div className={styles.title_name}>Румянцев Антон</div>
                <a href='https://github.com/RedmanPlus' className={styles.title}>
                    https://github.com/RedmanPlus
                </a>
            </div>
            <div className={styles.info}>
                <div className={styles.title_name}>Комарчев Александр</div>
                <a href={'https://github.com/alexkomarchev'} className={styles.title}>
                    https://github.com/alexkomarchev
                </a>
            </div>
            <div className={styles.info}>
                <div className={styles.title_name}>Чебышев Арсений</div>
                <a href={'https://github.com/arseny-chebyshev'} className={styles.title}>
                    https://github.com/arseny-chebyshev
                </a>
            </div>
            <div className={styles.info}>
                <div className={styles.title_name}>Иванов Леонид</div>
                <a href={'https://github.com/LonelyLeob'} className={styles.title}>
                    https://github.com/LonelyLeob
                </a>
            </div>
        </div>
    );
};

export default AboutUs;