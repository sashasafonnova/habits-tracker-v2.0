import styles from './Header.module.scss';

import LogoLight from '../../assets/icons/logo-light.svg';
import LogoDark from '../../assets/icons/logo-dark.svg';
import { AppLink, AppLinkVariant } from 'shared/ui/AppLink/AppLink';



export const Header = () => {
   return (
      <header className={styles.header}>
         <div className="container">
            <div className={styles.content}>
               <AppLink to={'/'} variant={AppLinkVariant.CLEAR}>
                  <LogoLight />
               </AppLink>
            </div>
         </div>
      </header>
   );
};