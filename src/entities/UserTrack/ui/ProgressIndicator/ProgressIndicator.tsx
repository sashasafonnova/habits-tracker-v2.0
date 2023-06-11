import React, { memo } from 'react';
import styles from './ProgressIndicator.module.scss';


interface ProgressIndicatorProps {
   progress: number,
   trackLength: number
}


export const ProgressIndicator: React.FC<ProgressIndicatorProps> = memo(function ProgressIndicator(props: ProgressIndicatorProps) {

   const { 
      progress = 0,
      trackLength = 0 
   } = props;

   return (
      <div className={styles.indicator}>
         {[...new Array(progress)].map((item, index) => (
            <svg key={index} className={styles.iconDone} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
               <rect x="0.5" y="0.5" width="19" height="19" rx="9.5"/>
            </svg>
         ))
         }
         {[...new Array(trackLength - progress)].map((item, index) => (
            <svg key={index} className={styles.icon} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
               <rect x="0.5" y="0.5" width="19" height="19" rx="9.5"/>
            </svg>
         ))}
      </div>
   );
});