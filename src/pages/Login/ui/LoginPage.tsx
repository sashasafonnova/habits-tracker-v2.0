import { LoginForm } from 'features/AuthByEmail';
import styles from './LoginPage.module.scss';


const LoginPage: React.FC = () => {
   return (
      <div className={styles.login}>
         <LoginForm/>
      </div>
   );
};

export default LoginPage;