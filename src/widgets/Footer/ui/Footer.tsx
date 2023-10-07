import styles from './Footer.module.scss';
import { ThemeSwitcher } from 'features/ThemeSwitcher';
import { AppBlock } from 'shared/ui/AppBlock/AppBlock';
import { HStack } from 'shared/ui/AppStack';
import { AppText } from 'shared/ui/AppText/AppText';

export const Footer: React.FC = () =>{
   
   return (
      <AppBlock className={styles.footer} container Tag='footer'>
         <HStack justify='between' max wrap='wrap' gap='20'>
            <ThemeSwitcher className={styles.switcher} />
            <AppText Tag='p' color='inverted' size='s'>© HabitsTracker, 2023</AppText>
         </HStack>
      </AppBlock>
   );
};