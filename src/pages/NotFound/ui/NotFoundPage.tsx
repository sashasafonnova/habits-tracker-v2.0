import { AppTitle, AppTitleColor, AppTitleVariant } from 'shared/ui/AppTitle/AppTitle';
import styles from './NotFoundPage.module.scss';


export const NotFoundPage: React.FC = () => {

   return (
      <div className={`page ${styles.page}`}>
         <div className='container'>
            <AppTitle variant={AppTitleVariant.LARGE} color={AppTitleColor.PRIMARY}>Страница не найдена</AppTitle>
         </div>
      </div>
   );
};