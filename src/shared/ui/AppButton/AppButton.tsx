
import { ButtonHTMLAttributes, ReactNode, memo } from 'react';
import styles from './AppButton.module.scss';
import { classMaker } from 'shared/lib/classMaker/classMaker';


export enum AppButtonVariant {
   CLEAR_TEXT = 'clearText',
   CLEAR_TITLE = 'clearTitle',
   CLEAR_WHITE = 'clearWhite',
   CLEAR_RED = 'clearRed',
   BACKGROUND = 'background',
   UNDERLINE = 'underline',
   OUTLINE = 'outline'
}

type ButtonProps = Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'onClick'>

interface AppButtonProps extends ButtonProps {
   children: string | ReactNode,
   variant?: AppButtonVariant,
   marginBottom?: string;
   value?: string,
   onClick?: (value: string) => void;
}


export const AppButton: React.FC<AppButtonProps> = memo(function AppButton(props: AppButtonProps) {

   const { children, variant, marginBottom, onClick, ...otherProps } = props;

   const onClickHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
      onClick?.(e.currentTarget.value);
   };

   const additional = [
      styles[variant],
      `marginBottom${marginBottom}`
   ];

   return (
      <button
         data-testid = 'appButton'
         type="button"
         className={classMaker(styles.appButton, additional)}
         onClick={onClickHandler}
         {...otherProps}     
      >
         {children}
      </button>
   );
});