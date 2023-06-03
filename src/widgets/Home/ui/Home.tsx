import { AppLink, AppLinkVariant } from 'shared/ui/AppLink/AppLink';
import styles from './Home.module.scss';
import { RoutePath } from 'app/providers/routerProvider/config/router';


export const Home: React.FC = () => {
   return (
      <div>
         <div className='container'>
            <div className={styles.content}>
               <h1 className={styles.title}>HabitsTracker <span>- приложение <br />для отслеживания привычек</span></h1>
               <p className={styles.subtitle}>Выбирайте готовые треки привычек или создавайте свои и отслеживайте их выполнение каждый день.</p>
               <AppLink 
                  to={RoutePath.registration} 
                  variant={AppLinkVariant.BUTTON} 
                  marginBottom={'20'}>
                  Присоединиться
               </AppLink>
               <div className={styles.account}>
                  <span className={styles.text}>Уже есть аккаунт?</span>
                  <AppLink to={RoutePath.login} variant={AppLinkVariant.UNDERLINE}>Войти</AppLink>
               </div>
            </div>
         </div>
           
      </div>
   );
};