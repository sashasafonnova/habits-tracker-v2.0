import styles from './TrackCard.module.scss';
import { UserTrack } from '../../model/types/userTrack';
import { AppLink, AppLinkVariant } from 'shared/ui/AppLink/AppLink';
import { AppButton } from 'shared/ui/AppButton/AppButton';
import { TrackProgress } from 'entities/TrackProgress';
import { TrackCategory } from 'entities/TrackCategory';
import { ProgressIndicator } from '../ProgressIndicator/ProgressIndicator';
import { memo } from 'react';
import { TrackStatus } from '../TrackStatus/TrackStatus';
import { HStack, VStack } from 'shared/ui/AppStack';
import { AppText } from 'shared/ui/AppText/AppText';


interface TrackCardProps {
   track: UserTrack;
   short?: boolean
}

export const TrackCard: React.FC<TrackCardProps> = memo(function TrackCard(props: TrackCardProps){

   const { 
      track,
      short = false
   } = props;

   return (
      <VStack className={styles.info} max gap='30'>
         <VStack max gap='20'>
            <TrackCategory category={track.category}/>
            <VStack max gap='20'>
               <VStack max gap='10'>
                  <TrackStatus status={track.status}/>
                  {!short ? <AppText size='l' Tag='h2'>
                     {track.title}
                  </AppText> : <AppLink to={`/tracks/${track._id}`} variant={AppLinkVariant.CLEAR}>
                     <AppText size='l' weight='bold'>
                        {track.title}
                     </AppText>
                  </AppLink>}
                  <HStack gap='4'>
                     <AppText Tag='span' weight='bold' size='s'>Начато:</AppText>
                     <AppText Tag='span' size='s'>{track.dateCreated}</AppText>
                  </HStack>
               </VStack>
               <TrackProgress progress={track.progress} trackLength={track.habitLength} />
               {!short && <ProgressIndicator progress={track.progress} trackLength={track.habitLength} />}
            </VStack>
         </VStack>
         <AppButton variant='outline'>Сделать отметку</AppButton>
         {!short && (
            <HStack gap='4'>
               <AppText Tag='span' weight='bold' size='s'>Последняя отметка:</AppText>
               <AppText Tag='span' size='s'>{track.lastUpdated}</AppText>
            </HStack>
         )}
      </VStack>  
   );
});