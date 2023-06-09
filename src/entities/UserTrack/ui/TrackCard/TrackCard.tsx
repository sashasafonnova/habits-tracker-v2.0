import styles from './TrackCard.module.scss';
import { UserTrack } from '../../model/types/userTrack';
import { AppLink, AppLinkVariant } from 'shared/ui/AppLink/AppLink';
import { AppButton, AppButtonVariant } from 'shared/ui/AppButton/AppButton';
import { AppTitle, AppTitleVariant } from 'shared/ui/AppTitle/AppTitle';
import { TrackProgress } from 'entities/TrackProgress';
import { TrackCategory } from 'entities/TrackCategory';
import { ProgressIndicator } from '../ProgressIndicator/ProgressIndicator';
import { memo } from 'react';


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
      <div className={styles.info}>
         <TrackCategory category={track.category} />
         {!short ? <AppTitle variant={AppTitleVariant.BIG} marginBottom={'20'}>
            {track.title}
         </AppTitle> : <AppLink to={`/tracks/${track._id}`} variant={AppLinkVariant.CLEAR}>
            <AppTitle variant={AppTitleVariant.BIG} marginBottom={'20'}>
               {track.title}
            </AppTitle>
         </AppLink>}
         <p className={styles.start}><span>Начато: </span>{track.dateCreated}</p>
         <TrackProgress progress={track.progress} trackLength={track.habitLength} />
         {!short && <ProgressIndicator progress={track.progress} trackLength={track.habitLength} />}
         <AppButton variant={AppButtonVariant.BACKGROUND} marginBottom={short ? '' : '40'}>Сделать отметку</AppButton>
         {!short &&<p className={styles.lastCheck}><span>Последняя отметка:</span><br />{track.lastUpdated}</p>}
      </div>  
   );
});