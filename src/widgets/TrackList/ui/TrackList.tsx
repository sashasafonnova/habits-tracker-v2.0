import { classMaker } from 'shared/lib/classMaker/classMaker';
import styles from './TrackList.module.scss';
import { TrackCard, getUserTracks } from 'entities/UserTrack';
import { AppTitle, AppTitleVariant } from 'shared/ui/AppTitle/AppTitle';
import { useSelector } from 'react-redux';

interface TrackListProps {
   variant?: string;
}

export const TrackList: React.FC<TrackListProps> = (props: TrackListProps) => {

   const { variant } = props;
   const tracks = useSelector(getUserTracks);


   return (
      <div className='container'>
         <AppTitle variant={AppTitleVariant.LARGE} primary={true} mb={'40'}>Мои треки</AppTitle>
         <div className={classMaker(styles.trackList, {}, [variant])}>
            {tracks.map(track => <TrackCard key={track._id} track={track} />)}
         </div>
      </div>
      
   );
};