import styles from './Header.module.scss';
import LogoLight from '../../assets/icons/logo-light.svg';
import LogoDark from '../../assets/icons/logo-dark.svg';
import UserIcon from '../../assets/icons/user-icon.svg';
import { AppLink, AppLinkVariant } from 'shared/ui/AppLink/AppLink';
import { Theme, useTheme } from 'app/providers/ThemeProvider';
import { AppButton } from 'shared/ui/AppButton/AppButton';
import { useSelector } from 'react-redux';
import { authDataSelector } from 'entities/User';
import { useCallback, useState } from 'react';
import { Menu } from 'widgets/Menu';
import { AppBlock } from 'shared/ui/AppBlock/AppBlock';
import { HStack } from 'shared/ui/AppStack';



export const Header = () => {

   const {theme} = useTheme();
   const authData = useSelector(authDataSelector);

   const [menuOpen, setMenuOpen] = useState(false);

   const closeMenu = useCallback(() => {
      setMenuOpen(false);
   }, [setMenuOpen]);


   const openMenu = () => {
      setMenuOpen(true);
   };


   const userMenuBtn = (
      <AppButton onClick={openMenu}>
         <UserIcon className={styles.btnIcon}/>
         <span className={styles.btnText}>Мой аккаунт</span>
      </AppButton>
   );


   return (
      <AppBlock container className={styles.header} Tag='header'>
         <HStack max justify='between'>
            <AppLink to={'/'} variant={AppLinkVariant.CLEAR}>
               {theme === Theme.LIGHT ? <LogoLight /> : <LogoDark />}
            </AppLink>
            {authData && userMenuBtn} 
            {menuOpen && <Menu closeMenu={closeMenu}/>}
         </HStack>
      </AppBlock>
            
   );
};