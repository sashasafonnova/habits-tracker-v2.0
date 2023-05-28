import { classMaker } from 'shared/lib/classMaker/classMaker';
import styles from './Modal.module.scss';
import { ReactNode } from 'react';
import { Portal } from '../Portal/Portal';

interface ModalProps {
   variant?: string;
   children?: ReactNode;
}

export const Modal: React.FC<ModalProps> = (props) => {
   const { variant, children } = props;

   return (
      <Portal>
         <div className={classMaker(styles.modal, {}, [variant])}>
            <div className={styles.overlay}>
               <div className={styles.content}>
                  {children}
               </div>
            </div>
         </div>
      </Portal>
   );
};