import styles from './TrackList.module.scss';
import { TrackCard, getUserTracks } from 'entities/UserTrack';
import { AppTitle, AppTitleColor, AppTitleVariant } from 'shared/ui/AppTitle/AppTitle';
import { useSelector } from 'react-redux';


export const TrackList: React.FC = () => {

   const tracks = useSelector(getUserTracks);

   return (
      <div className='container'>
         <AppTitle variant={AppTitleVariant.LARGE} color={AppTitleColor.PRIMARY} marginBottom={'40'}>Мои треки</AppTitle>
         <div className={styles.trackList}>
            {tracks.map(track => <TrackCard key={track._id} track={track} />)}
         </div>
      </div>
      
   );
};