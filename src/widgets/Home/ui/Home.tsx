import { AppLink, AppLinkVariant } from 'shared/ui/AppLink/AppLink';
import styles from './Home.module.scss';
import { RoutePath } from 'app/providers/routerProvider/config/router';
import { AppBlock } from 'shared/ui/AppBlock/AppBlock';
import { HStack, VStack } from 'shared/ui/AppStack';

export const Home: React.FC = () => {
   return (
      <AppBlock container padding={false}>
         <VStack className={styles.content} align='center' justify='center'>
            <h1 className={styles.title}>HabitsTracker <span>- приложение <br />для отслеживания привычек</span></h1>
            <p className={styles.subtitle}>Выбирайте готовые треки привычек или создавайте свои и отслеживайте их выполнение каждый день.</p>
            <AppLink 
               to={RoutePath.registration} 
               variant={AppLinkVariant.BUTTON} 
               marginBottom={'20'}>
                  Присоединиться
            </AppLink>
            <HStack className={styles.account}>
               <span className={styles.text}>Уже есть аккаунт?</span>
               <AppLink to={RoutePath.login} variant={AppLinkVariant.UNDERLINE}>Войти</AppLink>
            </HStack>
         </VStack>
      </AppBlock>
   );
};