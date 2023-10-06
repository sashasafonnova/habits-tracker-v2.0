import styles from './TrackCard.module.scss';
import { UserTrack } from '../../model/types/userTrack';
import { AppLink } from 'shared/ui/AppLink/AppLink';
import { AppButton } from 'shared/ui/AppButton/AppButton';
import { TrackProgress } from 'entities/TrackProgress';
import { TrackCategory } from 'entities/TrackCategory';
import { memo } from 'react';
import { TrackStatus } from '../TrackStatus/TrackStatus';
import { HStack, VStack } from 'shared/ui/AppStack';
import { AppText } from 'shared/ui/AppText/AppText';

interface TrackCardProps {
   track: UserTrack;
}

export const TrackCard: React.FC<TrackCardProps> = memo(function TrackCard(props: TrackCardProps){

   const { 
      track,
   } = props;

   return (
      <VStack className={styles.info} max gap='30'>
         <VStack max gap='20'>
            <TrackCategory category={track.category}/>
            <VStack max gap='20'>
               <VStack max gap='10'>
                  <TrackStatus status={track.status}/>
                  <AppLink to={`/tracks/${track._id}`}>
                     <AppText size='l' weight='bold'>
                        {track.title}
                     </AppText>
                  </AppLink>
                  <HStack gap='4'>
                     <AppText Tag='span' weight='bold' size='s'>Начато:</AppText>
                     <AppText Tag='span' size='s'>{track.dateCreated}</AppText>
                  </HStack>
               </VStack>
               <TrackProgress progress={track.progress} trackLength={track.habitLength} />
            </VStack>
         </VStack>
         <AppButton variant='outline'>Сделать отметку</AppButton>
      </VStack>  
   );
});