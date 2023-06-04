import styles from './TrackList.module.scss';
import { TrackCard, userTracksSelector } from 'entities/UserTrack';
import { useSelector } from 'react-redux';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import { fetchAllTracks } from '../../model/services/fetchUserTracks';
import { useEffect } from 'react';
import { tracksIsLoadingSelector } from 'widgets/TrackList/model/selectors/tacksIsLoadingSelector/tracksIsLoadingSelector';
import { TracksSkeleton } from '../TracksSkeleton/TracksSkeleton';


export const TrackList: React.FC = () => {

   const tracks = useSelector(userTracksSelector);
   const isLoading = useSelector(tracksIsLoadingSelector);

   const dispatch = useAppDispatch();

   useEffect(() => {
      dispatch(fetchAllTracks());
   }, []);

   if (isLoading){
      return (
         <TracksSkeleton />
      );
   }

   return (
      <div className={styles.trackList}>
         {tracks ? tracks.map(track => <TrackCard key={track._id} track={track} />) : 'У вас пока нет ни одного трека'}
      </div>
   );
};