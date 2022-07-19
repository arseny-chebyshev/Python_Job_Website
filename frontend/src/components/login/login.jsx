import styles from './login.module.scss'

const Login = () => {
    return (
        <div className={styles.login_wrap}>
            <button className={styles.login}>
                Войти
            </button>
        </div>

    );
};

export default Login;