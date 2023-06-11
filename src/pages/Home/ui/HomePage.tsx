import styles from './HomePage.module.scss';
import { Home } from 'widgets/Home';


export const HomePage: React.FC = () => {

   return (
      <div className={`page ${styles.page}`}>
         <Home/>
      </div>
   );
};