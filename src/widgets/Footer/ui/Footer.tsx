import { AppButton } from 'shared/ui/AppButton/AppButton';
import styles from './Footer.module.scss';
import { ThemeSwitcher } from 'features/ThemeSwitcher';
import { AppBlock } from 'shared/ui/AppBlock/AppBlock';
import { HStack, VStack } from 'shared/ui/AppStack';


export const Footer: React.FC = () =>{
   
   return (
      <AppBlock className={styles.footer} container Tag='footer'>
         <VStack gap='10'>
            <ThemeSwitcher />
            <HStack justify='between' max>
               <p className={styles.copyRight}>© HabitsTracker, 2023</p>
               <AppButton>Сообщить о проблеме</AppButton>
            </HStack>
         </VStack>
      </AppBlock>
   );
};