import styles from './PageLoader.module.scss';
import { Loader } from 'shared/ui/Loader/Loader';


export const PageLoader: React.FC = () => {

   return (
      <div className={styles.pageLoader}>
         <Loader />
      </div>
   );
};