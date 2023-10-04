import styles from './TrackList.module.scss';
import { TrackCard, userTracksSelector } from 'entities/UserTrack';
import { useSelector } from 'react-redux';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import { fetchUserTracks } from '../../model/services/fetchUserTracks';
import { useEffect } from 'react';
import { tracksIsLoadingSelector } from '../../model/selectors/tracksIsLoadingSelector/tracksIsLoadingSelector';
import { tracksErrorSelector } from '../../model/selectors/tracksErrorSelector/tracksErrorSelector';
import { TracksSkeleton } from '../TracksSkeleton/TracksSkeleton';
import { FetchLoader } from 'shared/ui/FetchLoader/FetchLoader';
import { useStateCreator } from 'shared/lib/hooks/useStateCreator';
import { userTrackReducer } from '../../model/slice/userTrackSlice';
import { AppBlock } from 'shared/ui/AppBlock/AppBlock';

export const TrackList: React.FC = () => {

   useStateCreator({ userTrack: userTrackReducer }, true);
   const tracks = useSelector(userTracksSelector);
   const isLoading = useSelector(tracksIsLoadingSelector);
   const error = useSelector(tracksErrorSelector);


   const dispatch = useAppDispatch();

   useEffect(() => {
      if (__PROJECT__ !=='storybook'){
         dispatch(fetchUserTracks());
      }
   }, []);

   if (isLoading){
      return <TracksSkeleton/>;
   }

   if (error && !isLoading){
      return <FetchLoader title={error} action={'На главную'} link={'/account'}/>;
   }

   return (
      <AppBlock padding>
         <ul className={styles.trackList}>
            {tracks.length > 0 ? tracks.map(track => (
               <li key={track._id}>
                  <TrackCard track={track} short={true} />
               </li>))
               : 'У вас пока нет ни одного трека'}
         </ul>
      </AppBlock>      
   );
};