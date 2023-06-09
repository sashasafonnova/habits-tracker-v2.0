import { InputHTMLAttributes, memo } from 'react';
import styles from './AppInput.module.scss';
import { classMaker } from 'shared/lib/classMaker/classMaker';


export enum AppInputVariant {
   BACKGROUND = 'background'
}

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange'>

interface AppInputProps extends HTMLInputProps {
   type?: string,
   marginBottom?: string,
   placeholder?: string,
   variant?: AppInputVariant,
   inputSize?: string,
   onChange?: (value: string) => void,
   value?: string
}


export const AppInput: React.FC<AppInputProps> = memo(function AppInput(props: AppInputProps) {

   const {
      variant = AppInputVariant.BACKGROUND,
      marginBottom,
      type = 'text',
      placeholder,
      inputSize = 'standart',
      onChange,
      value,
      ...otherProps } = props;

   const additional = [
      styles[variant], 
      styles[inputSize],
      `marginBottom${marginBottom}`
   ];

   const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
      onChange?.(e.target.value);
   };

   return (
      <input
         data-testid='appInput'
         type={type}
         placeholder={placeholder}
         className={classMaker(styles.appInput, additional)}
         onChange={onChangeHandler}
         value={value}
         {...otherProps} />
   );
});