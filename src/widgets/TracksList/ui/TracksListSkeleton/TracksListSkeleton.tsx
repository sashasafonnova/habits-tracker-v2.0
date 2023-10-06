import React, { memo } from 'react';
import styles from './TracksListSkeleton.module.scss';
import { AppBlock } from 'shared/ui/AppBlock/AppBlock';
import { TrackSkeleton } from 'entities/UserTrack';


export const TracksListSkeleton: React.FC = memo(function TracksListSkeleton(){

   return (
      <AppBlock className={styles.list} padding>
         {[...new Array(6)].map((item, index) => {
            return (
               <div key={index}>
                  <TrackSkeleton />
               </div>
            );
         })}
      </AppBlock>         
   );
});