import { AppLink } from 'shared/ui/AppLink/AppLink';
import styles from './Home.module.scss';
import { RoutePath } from 'app/providers/routerProvider/config/router';
import { AppBlock } from 'shared/ui/AppBlock/AppBlock';
import { HStack, VStack } from 'shared/ui/AppStack';
import { AppText } from 'shared/ui/AppText/AppText';

export const Home: React.FC = () => {
   return (
      <AppBlock container padding={false}>
         <VStack className={styles.content} align='center' justify='center' gap='40'>
            <VStack gap='20' align='center'>
               <h1 className={styles.title}>HabitsTracker <span>- приложение <br />для отслеживания привычек</span></h1>
               <AppText Tag='p' className={styles.subtitle}>Выбирайте готовые треки привычек или создавайте свои и отслеживайте их выполнение каждый день.</AppText>
            </VStack>
            <AppLink 
               to={RoutePath.registration} 
               variant='button'> 
                  Присоединиться
            </AppLink>
            <HStack gap='10'>
               <AppText Tag='span'>Уже есть аккаунт?</AppText>
               <AppLink to={RoutePath.login} variant='underline'>Войти</AppLink>
            </HStack>
         </VStack>
      </AppBlock>
   );
};