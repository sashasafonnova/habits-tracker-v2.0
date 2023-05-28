import { InputHTMLAttributes } from 'react';
import styles from './AppInput.module.scss';
import { classMaker } from 'shared/lib/classMaker/classMaker';


export enum AppInputVariant {
   BACKGROUND = 'background'
}

interface AppInputProps extends InputHTMLAttributes<HTMLInputElement>{
   type: string,
   placeholder?: string,
   variant?: AppInputVariant,
   mb?: string,
   inputSize?: string
}


export const AppInput: React.FC<AppInputProps> = (props) => {

   const { 
      children, 
      variant, 
      type, 
      placeholder, 
      mb, 
      inputSize = 'standart', 
      ...otherProps } = props;

   const mods = {
      [styles[`mb${mb}`]]: mb,
      [styles[inputSize]]: inputSize,

   };

   return (
      <input
         type={type}
         placeholder={placeholder}
         className={classMaker(styles.appInput, mods, [styles[variant]])}
         {...otherProps}
      >
         {children}
      </input>
   );
};