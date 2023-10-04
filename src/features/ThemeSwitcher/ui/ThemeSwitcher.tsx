import styles from './ThemeSwitcher.module.scss';
import { AppButton } from 'shared/ui/AppButton/AppButton';

import SwitcherImg from '../assets/themeSwitcher.svg';
import { useTheme } from 'app/providers/ThemeProvider';
import { memo } from 'react';


export const ThemeSwitcher: React.FC = memo(function ThemeSwitcher() {
   const { toggleTheme } = useTheme();

   return (
      <AppButton
         onClick={toggleTheme}>
         <div className={styles.btn}>
            <div className={styles.icon}>
               {<SwitcherImg />}
            </div>
            Сменить тему
         </div>
      </AppButton>
   );
});