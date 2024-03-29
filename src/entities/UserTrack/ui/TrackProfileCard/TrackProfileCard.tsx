import styles from './TrackProfileCard.module.scss';
import { UserTrack } from '../../model/types/userTrack';
import { TrackProgress } from 'entities/TrackProgress';
import { TrackCategory } from 'entities/TrackCategory';
import { ProgressIndicator } from '../ProgressIndicator/ProgressIndicator';
import { memo } from 'react';
import { TrackStatus } from '../TrackStatus/TrackStatus';
import { HStack, VStack } from 'shared/ui/AppStack';
import { AppText } from 'shared/ui/AppText/AppText';

interface TrackProfileCardProps {
   track: UserTrack;
   actions?: JSX.Element;
}

export const TrackProfileCard: React.FC<TrackProfileCardProps> = memo(function TrackProfileCard(props: TrackProfileCardProps){
   const { track, actions } = props;
   
   return (
      <VStack className={styles.info} max gap='30'>
         <VStack max gap='20'>
            <TrackCategory category={track?.category}/>
            <VStack max gap='30'>
               <VStack max gap='10'>
                  <TrackStatus status={track.status}/>
                  <AppText size='l' Tag='h2' weight='bold'>
                     {track.title}
                  </AppText>
                  <HStack gap='4'>
                     <AppText Tag='span' weight='bold' size='s'>Начато:</AppText>
                     <AppText Tag='span' size='s'>{track.dateCreated}</AppText>
                  </HStack>
               </VStack>
               <TrackProgress progress={track.progress} trackLength={track.habitLength} />
               <ProgressIndicator progress={track.progress} trackLength={track.habitLength} />
            </VStack>
         </VStack>
         {actions}
         <VStack gap='4' max>
            <AppText Tag='span' weight='bold' size='s'>Последняя отметка:</AppText>
            <AppText Tag='span' size='s'>{track.lastUpdated}</AppText>
         </VStack>
      </VStack>  
   );
});