import { RegistrationForm } from 'features/RegistrationByEmail';
import styles from './RegistrationPage.module.scss';
import { ArrowBack } from 'features/ArrowBack';


const RegistrationPage: React.FC = () => {
   return (
      <div className={styles.page}>
         <ArrowBack/>
         <RegistrationForm/>
      </div>
   );
};

export default RegistrationPage;