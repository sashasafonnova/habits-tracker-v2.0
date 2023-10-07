import { classMaker } from 'shared/lib/classMaker/classMaker';
import styles from './TrackSkeleton.module.scss';
import { HStack, VStack } from 'shared/ui/AppStack';
import { AppSkeleton } from 'shared/ui/AppSkeleton/AppSkeleton';

interface TrackSkeletonProps {
   className?: string;
}

export const TrackSkeleton: React.FC<TrackSkeletonProps> = (props: TrackSkeletonProps) => {
   const { className = '' } = props;

   return (
      <VStack className={classMaker(styles.trackSkeleton, [className], {})} max gap='30'>
         <HStack className={styles.category} gap='10' max align='center'>
            <AppSkeleton style={{width: 22, height: 22, borderRadius: '50%'}}/>
            <AppSkeleton style={{width: 110, height: 16, borderRadius: 2}}/>
         </HStack>
         <VStack gap='20' max>
            <VStack max gap='10'>
               <AppSkeleton style={{width: 50, height: 14, borderRadius: 2}}/>
               <AppSkeleton style={{width: '100%', height: 26, borderRadius: 2}}/>
               <AppSkeleton style={{width: 170, height: 22, borderRadius: 2}}/>
            </VStack>
            <AppSkeleton style={{width: 220, height: 30, borderRadius: 2}}/>
         </VStack>
         <AppSkeleton style={{width: 120, height: 40, borderRadius: 'var(--appbutton-border-radius)'}}/>
      </VStack>
   );
};