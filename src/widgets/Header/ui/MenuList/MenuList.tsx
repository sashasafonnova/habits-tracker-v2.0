import { classMaker } from 'shared/lib/classMaker/classMaker';
import styles from './MenuList.module.scss';
import { userActions } from 'entities/User';
import { USER_LOCALSTORAGE_KEY } from 'shared/consts/localStorage';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import { AppLink } from 'shared/ui/AppLink/AppLink';
import { useLocation } from 'react-router-dom';

interface MenuListProps {
   className?: string;
}

const menuLinks = [
   {
      name: 'Профиль',
      link: '/profile',
   },
   {
      name: 'Выйти',
      link: '/',
   }
];

export const MenuList: React.FC<MenuListProps> = (props: MenuListProps) => {
   const { className = '' } = props;
   const dispatch = useAppDispatch();
   const { pathname } = useLocation();

   const onClickLogOut = () => {
      dispatch(userActions.logOut());
      localStorage.removeItem(USER_LOCALSTORAGE_KEY);
   };

   return (
      <ul className={classMaker(styles.menuList, [className], {})}>
         {menuLinks.map((item) => (
            <li key={item.name} className={pathname === item.link ? styles.listItemActive : styles.listItem}>
               <AppLink 
                  to={item.link}
                  variant='text'
                  onClick={item.name === 'Выйти' && onClickLogOut} 
                  className={styles.listLink}>{item.name}
               </AppLink>
            </li>
         ))}
      </ul>
   );
};