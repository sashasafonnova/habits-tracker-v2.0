import { classMaker } from 'shared/lib/classMaker/classMaker';
import styles from './AppTitle.module.scss';
import { memo } from 'react';

export enum AppTitleVariant {
   SMALL = 'small',
   STANDART = 'standart',
   BIG = 'big',
   LARGE = 'large'
}

export enum AppTitleColor {
  MAIN = 'main',
  PRIMARY = 'primary',
  WHITE = 'white'
}

interface AppTitleProps {
   variant?: string;
   color?: AppTitleColor;
   children: string;
   marginBottom?: string;
}


export const AppTitle: React.FC<AppTitleProps> = memo(function AppTitle(props: AppTitleProps) {
   const { 
      variant, 
      children, 
      color = AppTitleColor.MAIN,
      marginBottom 
   } = props;

   const additional = [
      styles[color],
      styles[variant],
      `marginBottom${marginBottom}`
   ];

   return (
      <div className={classMaker(styles.appTitle, additional)}>
         {children}
      </div>
   );
});