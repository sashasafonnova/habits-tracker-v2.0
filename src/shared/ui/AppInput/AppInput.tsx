import { InputHTMLAttributes, memo } from 'react';
import styles from './AppInput.module.scss';
import { classMaker } from 'shared/lib/classMaker/classMaker';


export enum AppInputVariant {
   BACKGROUND = 'background',
}

export enum AppInputMods {
   ERROR = 'error',
}

export enum AppInputSizes {
   STANDART = 'standart'
}


type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange'>

interface AppInputProps extends HTMLInputProps {
   className?: string;
   type?: string,
   placeholder?: string,
   variant?: AppInputVariant,
   mods?: Record<string, boolean>,
   inputSize?: string,
   onChange?: (value: string) => void,
   value?: string;
   padding?: boolean;
}


export const AppInput: React.FC<AppInputProps> = memo(function AppInput(props: AppInputProps) {

   const {
      className = '',
      variant = AppInputVariant.BACKGROUND,
      mods,
      type = 'text',
      placeholder,
      inputSize = 'standart',
      onChange,
      value,
      padding = true,
      ...otherProps } = props;


   const additional = [
      className,
      styles[variant], 
      styles[inputSize],
   ];

   const stylesMods = {
      [styles[AppInputMods.ERROR]]: mods?.error || false,
      [styles.padding]: padding,
   };

   const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
      onChange?.(e.target.value);
   };

   return (
      <input
         data-testid='appInput'
         type={type}
         placeholder={placeholder}
         className={classMaker(styles.appInput, additional, stylesMods)}
         onChange={onChangeHandler}
         value={value}
         {...otherProps} />
   );
});