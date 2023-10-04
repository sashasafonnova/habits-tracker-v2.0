import { ReactNode } from 'react';
import { classMaker } from '../../lib/classMaker/classMaker';
import styles from './AppBlock.module.scss';

interface AppBlockProps {
    children: ReactNode,
    className?: string,
    Tag?: 'section' | 'header' | 'footer' | 'nav' | 'div',
    type?: 'page' | 'block',
    container?: boolean;
}

export const AppBlock: React.FC<AppBlockProps> = (props: AppBlockProps) => {
   const {
      children,
      className = '',
      Tag = 'div',
      container = false,
      type = 'block',
   } = props;

   const additional = [
      className,
      styles[type],
   ];

   if (!container) {
      return (
         <Tag className={classMaker(styles.appBlock, additional, {})}>
            {children}
         </Tag>
      );
   }

   return (
      <Tag className={classMaker(styles.appBlock, additional, {})}>
         <div className={styles.container}>
            {children}
         </div>
      </Tag>
   );
};
