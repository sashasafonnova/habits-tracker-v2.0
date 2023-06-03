import { LoginForm } from 'features/AuthByEmail';
import styles from './LoginPage.module.scss';
import { ArrowBack } from 'features/ArrowBack';


const LoginPage: React.FC = () => {
   return (
      <div className={styles.page}>
         <ArrowBack/>
         <LoginForm/>
      </div>
   );
};

export default LoginPage;