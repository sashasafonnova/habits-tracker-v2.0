
import { ButtonHTMLAttributes, ReactNode, memo } from 'react';
import styles from './AppButton.module.scss';
import { classMaker } from 'shared/lib/classMaker/classMaker';


export enum AppButtonVariant {
   CLEAR_TEXT = 'clearText',
   CLEAR_TITLE = 'clearTitle',
   CLEAR_WHITE = 'clearWhite',
   BACKGROUND = 'background',
   UNDERLINE = 'underline'
}

interface AppButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
   children: string | ReactNode,
   variant?: AppButtonVariant,
   marginBottom?: string;
}


export const AppButton: React.FC<AppButtonProps> = memo(function AppButton(props: AppButtonProps) {

   const { children, variant, marginBottom, ...otherProps } = props;

   const additional = [
      styles[variant],
      `marginBottom${marginBottom}`
   ];

   return (
      <button
         data-testid = 'appButton'
         type="button"
         className={classMaker(styles.appButton, additional)}
         {...otherProps}     
      >
         {children}
      </button>
   );
});