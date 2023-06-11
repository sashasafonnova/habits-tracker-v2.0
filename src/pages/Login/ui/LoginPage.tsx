import { LoginForm } from 'features/AuthByEmail';
import styles from './LoginPage.module.scss';


const LoginPage: React.FC = () => {
   return (
      <div className={`page ${styles.page}`}>
         <LoginForm/>
      </div>
   );
};

export default LoginPage;