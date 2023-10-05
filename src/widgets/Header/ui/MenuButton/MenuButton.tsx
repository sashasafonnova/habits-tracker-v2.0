import { classMaker } from 'shared/lib/classMaker/classMaker';
import userIcon from '../../assets/icons/user-icon.svg';
// import styles from './MenuButton.module.scss';
import { HStack } from 'shared/ui/AppStack';
import { useAuth } from 'shared/lib/hooks/useAuth';
import { AppIcon } from 'shared/ui/AppIcon/AppIcon';
import { AppText } from 'shared/ui/AppText/AppText';

interface MenuButtonProps {
   className?: string;
}

export const MenuButton: React.FC<MenuButtonProps> = (props: MenuButtonProps) => {
   const { className = '' } = props;
   const { authData } = useAuth();


   return (
      <HStack className={classMaker('', [className], {})} gap='10'>
         <AppText Tag='span'>{authData.firstName}</AppText>
         <AppIcon Svg={userIcon} width={20} height={20}/>
      </HStack>
   );
};

