import styles from './ThemeSwitcher.module.scss';
import { AppButton, AppButtonVariant } from 'shared/ui/AppButton/AppButton';

import SwitcherImg from '../assets/themeSwitcher.svg';
import { useTheme } from 'app/providers/ThemeProvider';



export const ThemeSwitcher: React.FC = () => {
   const { toggleTheme } = useTheme();

   return (
      <AppButton variant={AppButtonVariant.CLEAR_WHITE} onClick={toggleTheme} mb={'40'}>
         <div className={styles.btn}>
            <div className={styles.icon}>
               {<SwitcherImg />}
            </div>
            Сменить тему
         </div>
      </AppButton>
   );
};