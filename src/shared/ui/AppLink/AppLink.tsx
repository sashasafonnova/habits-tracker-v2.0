import { Link, LinkProps } from 'react-router-dom';
import styles from './AppLink.module.scss';
import { classMaker } from 'shared/lib/classMaker/classMaker';
import { memo } from 'react';

interface AppLinkProps extends LinkProps {
   className?: string;
   variant?: 'clear' | 'text' | 'button' | 'white' | 'underline',
   size?: 'xs' | 's' | 'm' | 'l' | 'xl' | 'xxl' | 'xxxl';
   hover?: boolean;
}

export const AppLink: React.FC<AppLinkProps> = memo(function AppLink(props: AppLinkProps) {
   const { className = '', children, to, variant = 'clear', size = 's', hover = true, ...otherProps} = props;

   const additional = [
      className,
      styles[variant],
      styles[size],
   ];

   const mods = {
      [styles.hover]: hover
   };

   return (
      <Link 
         className={classMaker(styles.appLink, additional, mods)}
         to={to}
         {...otherProps}
      >
         {children}
      </Link>
   );
});