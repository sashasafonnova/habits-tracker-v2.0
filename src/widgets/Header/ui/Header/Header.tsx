import styles from './Header.module.scss';
import LogoLight from '../../assets/icons/logo-light.svg';
import LogoDark from '../../assets/icons/logo-dark.svg';
import { AppLink, AppLinkVariant } from 'shared/ui/AppLink/AppLink';
import { Theme, useTheme } from 'app/providers/ThemeProvider';
import { AppBlock } from 'shared/ui/AppBlock/AppBlock';
import { HStack } from 'shared/ui/AppStack';
import { useAuth } from 'shared/lib/hooks/useAuth';
import { Menu } from '../Menu/Menu';

export const Header = () => {

   const {theme} = useTheme();
   const { authData } = useAuth();

   return (
      <AppBlock container className={styles.header} Tag='header'>
         <HStack max justify='between'>
            <AppLink to={'/'} variant={AppLinkVariant.CLEAR}>
               {theme === Theme.LIGHT ? <LogoLight /> : <LogoDark />}
            </AppLink>
            {authData && <Menu />}
         </HStack>
      </AppBlock>
            
   );
};