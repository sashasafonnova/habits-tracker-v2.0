import { Link, LinkProps } from 'react-router-dom';
import styles from './AppLink.module.scss';
import { classMaker } from 'shared/lib/classMaker/classMaker';
import { memo } from 'react';


export enum AppLinkVariant {
   CLEAR = 'clear',
   BUTTON = 'button',
   UNDERLINE = 'underline',
   WHITE = 'white'
}

interface AppLinkProps extends LinkProps {
   variant?: AppLinkVariant,
   marginBottom?: string,
}


export const AppLink: React.FC<AppLinkProps> = memo(function AppLink(props: AppLinkProps) {

   const { children, to, variant, marginBottom, ...otherProps} = props;

   const additional = [
      styles[variant],
      `marginBottom${marginBottom}` 
   ];

   return (
      <Link 
         className={classMaker(styles.appLink, additional)}
         to={to}
         {...otherProps}
      >
         {children}
      </Link>
   );
});