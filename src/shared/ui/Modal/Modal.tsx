import { classMaker } from 'shared/lib/classMaker/classMaker';
import styles from './Modal.module.scss';
import { ReactNode } from 'react';
import { Portal } from '../Portal/Portal';
import { useTheme } from 'app/providers/ThemeProvider';

interface ModalProps {
   variant?: string;
   children?: ReactNode;
}

export const Modal: React.FC<ModalProps> = (props: ModalProps) => {
   const {theme} = useTheme();
   const { 
      variant, 
      children 
   } = props;

   const additional = [
      variant, 
      theme
   ];

   return (
      <Portal>
         <div className={classMaker(styles.modal, additional)}>
            <div className={styles.overlay}>
               <div className={styles.content}>
                  {children}
               </div>
            </div>
         </div>
      </Portal>
   );
};