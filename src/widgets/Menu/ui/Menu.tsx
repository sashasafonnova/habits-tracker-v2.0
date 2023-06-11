import { AppLink, AppLinkVariant } from 'shared/ui/AppLink/AppLink';
import styles from './Menu.module.scss';
import { useSelector } from 'react-redux';
import { authDataSelector, userActions } from 'entities/User';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import { USER_LOCALSTORAGE_KEY } from 'shared/consts/localStorage';
import { RoutePath } from 'app/providers/routerProvider/config/router';
import { userTrackActions } from 'entities/UserTrack';


interface MenuProps {
   closeMenu: () => void;
}

export const Menu: React.FC<MenuProps> = (props: MenuProps) => {
   const { closeMenu } = props;

   const authData = useSelector(authDataSelector);
   const dispatch = useAppDispatch();

   const onClickLogOut = () => {
      dispatch(userActions.logOut());
      dispatch(userTrackActions.clearAuthData());
      localStorage.removeItem(USER_LOCALSTORAGE_KEY);
      closeMenu();
   };

   return (
      <section className={styles.menu} onClick={closeMenu}>
         <div className={styles.content} onClick={(e) => e.stopPropagation()}>
            <button className={styles.close} onClick={closeMenu}>X</button>
            <AppLink to={RoutePath.account} className={styles.data} onClick={closeMenu}>
               <p className={styles.name}>{authData.firstName}</p>
               <p className={styles.email}>{authData.email}</p>
            </AppLink>
            <nav className={styles.nav}>
               <ul className={styles.actions}>
                  <li className={styles.action}>
                     <AppLink to={'./create'} variant={AppLinkVariant.WHITE} onClick={closeMenu}>Создать привычку</AppLink>
                  </li>
                  <li className={styles.action}>
                     <AppLink to={RoutePath.tracks} variant={AppLinkVariant.WHITE} onClick={closeMenu}>Мои треки</AppLink>
                  </li>
               </ul>
               <div className={styles.logOut}>
                  <AppLink to={RoutePath.login} variant={AppLinkVariant.WHITE} onClick={onClickLogOut}>Выйти</AppLink>
               </div>
            </nav>
         </div>   
      </section>
   );
};
