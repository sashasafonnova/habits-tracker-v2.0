import React, { memo } from 'react';
import styles from './TrackProfileSkeleton.module.scss';


export const TrackProfileSkeleton: React.FC = memo(function TrackProfileSkeleton() {

   return (
      <div className={styles.info}>
         <div className={styles.category}>
            <div className={styles.categoryIcon}></div>
            <div className={styles.categoryText}></div>
         </div>
         <div className={styles.title}></div>
         <div className={styles.start}></div>
         <div className={styles.progress}></div>
         <div className={styles.progressTrek}>
            {[...new Array(60)].map((item, index) => (
               <div className={styles.progressIcon} key={index}></div>
            ))
            }
         </div>
         <div className={styles.btnCheck}></div>
         <div className={styles.lastCheckTitle}></div>
         <div className={styles.lastCheck}></div>
      </div>        
   );
});