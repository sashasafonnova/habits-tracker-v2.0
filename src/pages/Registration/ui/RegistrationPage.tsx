import { RegistrationForm } from 'features/RegistrationByEmail';
import styles from './RegistrationPage.module.scss';


const RegistrationPage: React.FC = () => {
   return (
      <div className={styles.page}>
         <RegistrationForm/>
      </div>
   );
};

export default RegistrationPage;