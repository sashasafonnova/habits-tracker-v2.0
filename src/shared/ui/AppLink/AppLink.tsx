import { Link, LinkProps } from 'react-router-dom';
import styles from './AppLink.module.scss';
import { classMaker } from 'shared/lib/classMaker/classMaker';


export enum AppLinkVariant {
   CLEAR = 'clear',
   BUTTON = 'button',
   UNDERLINE = 'underline'
}

interface AppLinkProps extends LinkProps {
   variant?: AppLinkVariant,
   mb?: string,
}


export const AppLink: React.FC<AppLinkProps> = (props: AppLinkProps) => {

   const {children, to, variant, mb, ...otherProps} = props;

   const mods = {
      [styles[`mb${mb}`]]: mb,
   };

   return (
      <Link 
         className={classMaker(styles.appLink, mods, [styles[variant]])}
         to={to}
         {...otherProps}
      >
         {children}
      </Link>
   );
};