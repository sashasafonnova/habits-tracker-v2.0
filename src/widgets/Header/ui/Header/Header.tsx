import styles from './Header.module.scss';

import LogoLight from '../../assets/icons/logo-light.svg';
import LogoDark from '../../assets/icons/logo-dark.svg';
import { AppLink, AppLinkVariant } from 'shared/ui/AppLink/AppLink';
import { Theme, useTheme } from 'app/providers/ThemeProvider';


export const Header = () => {

   const {theme} = useTheme();

   return (
      <header className={styles.header}>
         <div className="container">
            <div className={styles.content}>
               <AppLink to={'/'} variant={AppLinkVariant.CLEAR}>
                  {theme === Theme.LIGHT ? <LogoLight /> : <LogoDark />}
               </AppLink>
            </div>
         </div>
      </header>
   );
};