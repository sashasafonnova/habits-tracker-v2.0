import React, { memo } from 'react';
import styles from './TrackProfileSkeleton.module.scss';
import { HStack, VStack } from 'shared/ui/AppStack';
import { classMaker } from 'shared/lib/classMaker/classMaker';
import { AppSkeleton } from 'shared/ui/AppSkeleton/AppSkeleton';


export const TrackProfileSkeleton: React.FC = memo(function TrackProfileSkeleton() {

   return (
      <VStack className={classMaker(styles.trackSkeleton, [], {})} max gap='30'>
         <HStack className={styles.category} gap='10' max align='center'>
            <AppSkeleton style={{width: 22, height: 22, borderRadius: '50%'}}/>
            <AppSkeleton style={{width: 110, height: 16, borderRadius: 2}}/>
         </HStack>
         <VStack gap='30' max>
            <VStack max gap='10'>
               <AppSkeleton style={{width: 50, height: 14, borderRadius: 2}}/>
               <AppSkeleton style={{width: '100%', maxWidth: 300,  height: 26, borderRadius: 2}}/>
               <AppSkeleton style={{width: 170, height: 22, borderRadius: 2}}/>
            </VStack>
            <AppSkeleton style={{width: 220, height: 30, borderRadius: 2}}/>
         </VStack>
         <HStack className={styles.progressContainer}  wrap='wrap' gap='4'>
            {[...new Array(60)].map((item, index) => <AppSkeleton key={index} style={{width: 18, height: 18, borderRadius: '50%'}}/>)}
         </HStack>
         <HStack gap='10'>
            <AppSkeleton style={{width: 120, height: 40, borderRadius: 'var(--appbutton-border-radius)'}}/>
            <AppSkeleton style={{width: 160, height: 40, borderRadius: 'var(--appbutton-border-radius)'}}/>
         </HStack>
         <VStack gap='10'>
            <AppSkeleton style={{width: 140, height: 16, borderRadius: 2}}/>
            <AppSkeleton style={{width: 100, height: 16, borderRadius: 2}}/>
         </VStack>
      </VStack>      
   );
});