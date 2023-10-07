import styles from './ThemeSwitcher.module.scss';
import { AppButton } from 'shared/ui/AppButton/AppButton';
import SwitcherImg from '../assets/themeSwitcher.svg';
import { useTheme } from 'app/providers/ThemeProvider';
import { memo } from 'react';
import { AppIcon } from 'shared/ui/AppIcon/AppIcon';
import { AppText } from 'shared/ui/AppText/AppText';
import { HStack } from 'shared/ui/AppStack';

interface ThemeSwitcherProps {
   className?: string;
}


export const ThemeSwitcher: React.FC<ThemeSwitcherProps> = memo(function ThemeSwitcher(props: ThemeSwitcherProps) {
   const { className = '' } = props;
   const { toggleTheme } = useTheme();

   return (
      <AppButton className={className}
         onClick={toggleTheme}>
         <HStack className={styles.btn} gap='10'>
            <AppIcon Svg={SwitcherImg} width={20} height={20} className={styles.icon}/>
            <AppText Tag='span' color='inverted' size='s'>Сменить тему</AppText>
         </HStack>
      </AppButton>
   );
});