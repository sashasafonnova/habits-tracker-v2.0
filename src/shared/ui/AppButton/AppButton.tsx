
import { ButtonHTMLAttributes, ReactNode } from 'react';
import styles from './AppButton.module.scss';
import { classMaker } from 'shared/lib/classMaker/classMaker';


export enum AppButtonVariant {
   CLEAR = 'clear',
   CLEAR_WHITE = 'clearWhite',
   BACKGROUND = 'background'
}

interface AppButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
   children: string | ReactNode,
   variant?: AppButtonVariant,
   mb?: string,
}


export const AppButton: React.FC<AppButtonProps> = (props: AppButtonProps) => {

   const { children, variant, mb, ...otherProps } = props;

   const mods = {
      [styles[`mb${mb}`]]: mb,
   };

   return (
      <button
         data-testid = 'appButton'
         type="button"
         className={classMaker(styles.appButton, mods, [styles[variant]])}
         {...otherProps}     
      >
         {children}
      </button>
   );
};