import { RegistrationForm } from 'features/RegistrationByEmail';
import styles from './RegistrationPage.module.scss';


export const RegistrationPage: React.FC = () => {
    return (
        <div className={styles.registration}>
            <RegistrationForm/>
        </div>
    );
};