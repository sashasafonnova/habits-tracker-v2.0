import { classMaker } from 'shared/lib/classMaker/classMaker';
import styles from './AppTitle.module.scss';
import { memo } from 'react';

export enum AppTitleVariant {
   SMALL = 'small',
   STANDART = 'standart',
   BIG = 'big',
   LARGE = 'large'
}

interface AppTitleProps {
   variant?: string;
   primary?: boolean;
   mb?: string;
   children: string;
}


export const AppTitle: React.FC<AppTitleProps> = memo(function AppTitle(props: AppTitleProps) {
   const { variant, children, primary, mb} = props;

   const mods = {
      [styles['primary']]: primary,
      [styles[`mb${mb}`]]: mb,
   };

   return (
      <div className={classMaker(styles.appTitle, mods, [styles[variant]])}>
         {children}
      </div>
   );
});