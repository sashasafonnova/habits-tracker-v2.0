import { memo } from 'react';
import styles from './Loader.module.scss';


export const Loader: React.FC = memo(function Loader(){

   return (
      <div className={styles.ldsspinner}>
         <div></div>
         <div></div>
         <div></div>
         <div></div>
         <div></div>
         <div></div>
         <div></div>
         <div></div>
         <div></div>
         <div></div>
         <div></div>
         <div></div>
      </div>
   );
});