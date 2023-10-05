import { classMaker } from 'shared/lib/classMaker/classMaker';
import styles from './AppText.module.scss';

export type AppTextColors = 'main' | 'inverted' | 'error' | 'primary' | 'done';

export interface AppTextProps {
   className?: string,
   size?: 'xs' | 's' | 'm' | 'l' | 'xl' | 'xxl' | 'xxxl';
   color?: AppTextColors;
   align?: 'left' | 'center' | 'right';
   weight?: 'light' | 'medium' | 'bold' ;
   Tag?: 'h1' | 'h2' | 'h3' | 'h4' | 'p' | 'span';
   noWrap?: boolean;
   dots?: boolean;
   children: string | number;
   inlineStyles?: React.CSSProperties,
}

export const AppText: React.FC<AppTextProps> = (props:AppTextProps) => {
   const {
      className = '',
      size = 'm',
      Tag = 'p',
      weight = 'light',
      children,
      inlineStyles,
      noWrap = false,
      align = 'left',
      dots = false,
      color = 'main',
   } = props;

   const additional = [
      className,
      styles[size],
      styles[color],
      styles[weight],
      styles[align],
   ];

   const Mods = {
      [styles.noWrap]: noWrap,
      [styles.dots]: dots,
   };

   return (
      <Tag
         className={classMaker(styles.title, additional, Mods)}
         style={inlineStyles}
      >
         {children}
      </Tag>
   );
};
