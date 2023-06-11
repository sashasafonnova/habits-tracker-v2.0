import React, { memo } from 'react';
import styles from './TracksSkeleton.module.scss';


export const TracksSkeleton: React.FC = memo(function TracksSkeleton(){

   return (
      <div className={styles.list}>
         {[...new Array(6)].map((item, index) => {
            return (
               <div className={styles.item} key={index}>
                  <div className={styles.category}>
                     <div className={styles.categoryIcon}></div>
                     <div className={styles.categoryText}></div>
                  </div>
                  <div className={styles.title}></div>
                  <div className={styles.progress}></div>
                  <div className={styles.lastCheckTitle}></div>
                  <div className={styles.lastCheck}></div>
                  <div className={styles.btnCheck}></div>
               </div>
            );
         })}
      </div>         
   );
});