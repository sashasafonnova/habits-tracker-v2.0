import { LoginForm } from 'features/AuthByEmail';
import styles from './LoginPage.module.scss';


export const LoginPage: React.FC = () => {
    return (
        <div className={styles.login}>
            <LoginForm/>
        </div>
    );
};