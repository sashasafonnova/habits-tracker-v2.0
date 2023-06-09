import styles from './ThemeSwitcher.module.scss';
import { AppButton, AppButtonVariant } from 'shared/ui/AppButton/AppButton';

import SwitcherImg from '../assets/themeSwitcher.svg';
import { useTheme } from 'app/providers/ThemeProvider';
import { memo } from 'react';


export const ThemeSwitcher: React.FC = memo(function ThemeSwitcher() {
   const { toggleTheme } = useTheme();

   return (
      <AppButton 
         variant={AppButtonVariant.CLEAR_WHITE} 
         onClick={toggleTheme} 
         marginBottom={'40'}>
         <div className={styles.btn}>
            <div className={styles.icon}>
               {<SwitcherImg />}
            </div>
            Сменить тему
         </div>
      </AppButton>
   );
});