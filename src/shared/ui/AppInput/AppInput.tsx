import { InputHTMLAttributes, memo } from 'react';
import styles from './AppInput.module.scss';
import { classMaker } from 'shared/lib/classMaker/classMaker';


export enum AppInputVariant {
   BACKGROUND = 'background'
}

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange'>


interface AppInputProps extends HTMLInputProps {
   type?: string,
   placeholder?: string,
   variant?: AppInputVariant,
   mb?: string,
   inputSize?: string,
   onChange?: (value: string) => void,
   value?: string
}


export const AppInput: React.FC<AppInputProps> = memo(function AppInput(props: AppInputProps) {

   const {
      variant = AppInputVariant.BACKGROUND,
      type = 'text',
      placeholder,
      mb,
      inputSize = 'standart',
      onChange,
      value,
      ...otherProps } = props;

   const mods = {
      [styles[`mb${mb}`]]: mb,
      [styles[inputSize]]: inputSize,

   };

   const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
      onChange(e.target.value);
   };

   return (
      <input
         data-testid='appInput'
         type={type}
         placeholder={placeholder}
         className={classMaker(styles.appInput, mods, [styles[variant]])}
         onChange={onChangeHandler}
         value={value}
         {...otherProps} />
   );
});