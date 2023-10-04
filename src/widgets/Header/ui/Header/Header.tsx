import styles from './Header.module.scss';
import LogoLight from '../../assets/icons/logo-light.svg';
import LogoDark from '../../assets/icons/logo-dark.svg';
import UserIcon from '../../assets/icons/user-icon.svg';
import { AppLink, AppLinkVariant } from 'shared/ui/AppLink/AppLink';
import { Theme, useTheme } from 'app/providers/ThemeProvider';
import { AppBlock } from 'shared/ui/AppBlock/AppBlock';
import { HStack } from 'shared/ui/AppStack';
import { useAuth } from 'shared/lib/hooks/useAuth';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import { userActions } from 'entities/User';
import { userTrackActions } from 'entities/UserTrack';
import { USER_LOCALSTORAGE_KEY } from 'shared/consts/localStorage';
import { RoutePath } from 'app/providers/routerProvider/config/router';

export const Header = () => {

   const {theme} = useTheme();
   const { authData } = useAuth();
   const dispatch = useAppDispatch();

   const onClickLogOut = () => {
      dispatch(userActions.logOut());
      dispatch(userTrackActions.clearUserTrackData());
      localStorage.removeItem(USER_LOCALSTORAGE_KEY);
   };

   return (
      <AppBlock container className={styles.header} Tag='header'>
         <HStack max justify='between'>
            <AppLink to={'/'} variant={AppLinkVariant.CLEAR}>
               {theme === Theme.LIGHT ? <LogoLight /> : <LogoDark />}
            </AppLink>
            {authData && (
               <HStack gap='8'>
                  <UserIcon className={styles.btnIcon}/>
                  <span className={styles.btnText}>Мой аккаунт</span>
                  <AppLink to={RoutePath.login} onClick={onClickLogOut}>
                     Выйти
                  </AppLink> 
               </HStack>)}
         </HStack>
      </AppBlock>
            
   );
};