import { AppButton } from 'shared/ui/AppButton/AppButton';
import styles from './Footer.module.scss';
import { ThemeSwitcher } from 'features/ThemeSwitcher';
import { AppBlock } from 'shared/ui/AppBlock/AppBlock';
import { HStack, VStack } from 'shared/ui/AppStack';
import { AppText } from 'shared/ui/AppText/AppText';

export const Footer: React.FC = () =>{
   
   return (
      <AppBlock className={styles.footer} container Tag='footer'>
         <VStack gap='10'>
            <ThemeSwitcher />
            <HStack justify='between' max>
               <AppText Tag='p' color='inverted'>© HabitsTracker, 2023</AppText>
               <AppButton>Сообщить о проблеме</AppButton>
            </HStack>
         </VStack>
      </AppBlock>
   );
};