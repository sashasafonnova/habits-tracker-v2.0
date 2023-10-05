import { classMaker } from 'shared/lib/classMaker/classMaker';
// import styles from './Menu.module.scss';
import { AppDropdown } from 'shared/ui/AppDropdown/AppDropdown';
import { MenuList } from '../MenuList/MenuList';
import { MenuButton } from '../MenuButton/MenuButton';

interface MenuProps {
   className?: string;
}

export const Menu: React.FC<MenuProps> = (props: MenuProps) => {
   const { className = '' } = props;

   return (
      <div className={classMaker('', [className], {})}>
         <AppDropdown button={<MenuButton />} popupPosition='positionRight'>
            <MenuList />
         </AppDropdown>
      </div>
   );
};
