
import { ButtonHTMLAttributes, ReactNode, memo } from 'react';
import styles from './AppButton.module.scss';
import { classMaker } from 'shared/lib/classMaker/classMaker';

export type AppButtonVariant = 'background' | 'underline' | 'outline';

type ButtonProps = Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'onClick'>

export interface AppButtonProps extends ButtonProps {
   className?: string;
   children: string | ReactNode,
   variant?: AppButtonVariant,
   value?: string,
   onClick?: (value: string) => void;
   focus?: boolean;
   max?: boolean;
   round?: boolean;
   hover?: boolean;
   contentPosition?: 'positionCenter' | 'positionLeft'
}

export const AppButton: React.FC<AppButtonProps> = memo(function AppButton(props: AppButtonProps) {
   const { className, children, variant, onClick, focus, max, hover=true, contentPosition, round=true, ...otherProps } = props;

   const onClickHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
      onClick?.(e.currentTarget.value);
   };

   const additional = [
      className,
      styles[variant],
      styles[contentPosition],
   ];

   const mods = {
      [styles.focus]: focus,
      [styles.max]: max,
      [styles.round]: round,
      [styles.hover]: hover,
   };

   return (
      <button
         data-testid = 'appButton'
         type="button"
         className={classMaker(styles.appButton, additional, mods)}
         onClick={onClickHandler}
         {...otherProps}     
      >
         {children}
      </button>
   );
});