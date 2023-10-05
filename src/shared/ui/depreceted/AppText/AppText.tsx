import { classMaker } from 'shared/lib/classMaker/classMaker';
import styles from './AppText.module.scss';
import { memo } from 'react';


export enum AppTextColors {
   MAIN = 'main',
   ERROR = 'error',
   PRIMARY = 'primary',
   DONE = 'done',
}

export enum AppTextSizes {
   XS ='xs',
   S = 's',
   M = 'm',
}

export enum AppTextMods {
   EXTRABOLD = 'extraBold',
}

interface AppTextProps {
   className?: string;
   color?: AppTextColors;
   textSize?: AppTextSizes;
   children: string;
   marginBottom?: string;
   mods?: Record<AppTextMods, boolean>
}

export const AppText: React.FC<AppTextProps> = memo(function AppText(props: AppTextProps){
   const { color = AppTextColors.MAIN, children, marginBottom, textSize, mods, className } = props;

   const additional = [
      className,
      styles[color],
      styles[textSize],
      `marginBottom${marginBottom}`
   ];

   const stylesMods = {
      [styles[AppTextMods.EXTRABOLD]]: mods?.extraBold,
   };

   return (
      <p className={classMaker(styles.dropdown, additional, stylesMods)}>
         {children}
      </p>
   );
});