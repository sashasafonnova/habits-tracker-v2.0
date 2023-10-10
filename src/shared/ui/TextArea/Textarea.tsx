import { memo } from 'react';
import styles from './Textarea.module.scss';
import { classMaker } from 'shared/lib/classMaker/classMaker';


export enum TextareaVariant {
   OUTLINE = 'outline',
}

type TextareaType = Omit<React.TextareaHTMLAttributes<HTMLTextAreaElement>, 'onChange'>;


interface TextareaProps extends TextareaType {
   variant?: TextareaVariant;
   placeholder?: string,
   onChange?: (value: string) => void,
   marginBottom?: string;
   value?: string;
   cols?: number;
   rows?: number;
}

export const Textarea: React.FC<TextareaProps> = memo(function Textarea(props: TextareaProps){
   const { onChange, variant = TextareaVariant.OUTLINE, cols, rows, marginBottom, placeholder, value } = props;

   const additional = [
      styles[variant],
      `marginBottom${marginBottom}`
   ];

   const onChangeHandler = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
      onChange?.(e.target.value);
   };


   return (
      <textarea cols={cols} rows={rows} placeholder={placeholder} value={value} className={classMaker(styles.textarea, additional)} onChange={onChangeHandler}></textarea>
   );
});