import styles from './Header.module.scss';

import LogoLight from '../../assets/icons/logo-light.svg';
import LogoDark from '../../assets/icons/logo-dark.svg';
import { AppLink, AppLinkVariant } from 'shared/ui/AppLink/AppLink';
import { Theme, useTheme } from 'app/providers/ThemeProvider';
import { AppButton, AppButtonVariant } from 'shared/ui/AppButton/AppButton';
import { useSelector } from 'react-redux';
import { getAuthData } from 'entities/User';
import { useCallback, useState } from 'react';
import { Menu } from 'widgets/Menu';


export const Header = () => {

   const {theme} = useTheme();
   const authData = useSelector(getAuthData);

   const [menuOpen, setMenuOpen] = useState(false);

   const closeMenu = useCallback(() => {
      setMenuOpen(false);
   }, [setMenuOpen]);

   const openMenu = () => {
      setMenuOpen(true);
   };

   return (
      <header className={styles.header}>
         <div className="container">
            <div className={styles.content}>
               <AppLink to={'/'} variant={AppLinkVariant.CLEAR}>
                  {theme === Theme.LIGHT ? <LogoLight /> : <LogoDark />}
               </AppLink>
               {authData && <AppButton variant={AppButtonVariant.CLEAR} onClick={openMenu}>Мой аккаунт</AppButton>}
               {menuOpen && <Menu closeMenu={closeMenu}/>}
            </div>
         </div>
      </header>
   );
};