import styles from './ThemeSwitcher.module.scss';
import { AppButton } from 'shared/ui/AppButton/AppButton';
import SwitcherImg from '../assets/themeSwitcher.svg';
import { useTheme } from 'app/providers/ThemeProvider';
import { memo } from 'react';
import { AppIcon } from 'shared/ui/AppIcon/AppIcon';
import { AppText } from 'shared/ui/AppText/AppText';
import { HStack } from 'shared/ui/AppStack';


export const ThemeSwitcher: React.FC = memo(function ThemeSwitcher() {
   const { toggleTheme } = useTheme();

   return (
      <AppButton
         onClick={toggleTheme}>
         <HStack className={styles.btn} gap='10'>
            <AppIcon Svg={SwitcherImg} width={20} height={20} className={styles.icon}/>
            <AppText Tag='span'>Сменить тему</AppText>
         </HStack>
      </AppButton>
   );
});