import { RegistrationForm } from 'features/RegistrationByEmail';
import styles from './RegistrationPage.module.scss';


const RegistrationPage: React.FC = () => {
   return (
      <div className={styles.registration}>
         <RegistrationForm/>
      </div>
   );
};

export default RegistrationPage;