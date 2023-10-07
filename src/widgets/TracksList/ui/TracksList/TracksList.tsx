import styles from './TracksList.module.scss';
import { TrackCard } from 'entities/UserTrack';
import { useSelector } from 'react-redux';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import { useEffect } from 'react';
import { FetchLoader } from 'shared/ui/FetchLoader/FetchLoader';
import { useStateCreator } from 'shared/lib/hooks/useStateCreator';
import { AppBlock } from 'shared/ui/AppBlock/AppBlock';
import { tracksListReducer } from '../../model/slice/tracksListSlice';
import { tracksListSelector } from '../../model/selectors/tracksListSelector/tracksListSelector';
import { tracksIsLoadingSelector } from '../../model/selectors/tracksIsLoadingSelector/tracksIsLoadingSelector';
import { fetchErrorSelector } from '../../model/selectors/fetchErrorSelector/fetchErrorSelector';
import { fetchUserTracks } from '../../model/services/fetchUserTracks';
import { TracksListSkeleton } from '../TracksListSkeleton/TracksListSkeleton';
import { ProgressUpdate } from 'features/ProgressUpdate';

export const TrackList: React.FC = () => {

   useStateCreator({ tracksList: tracksListReducer }, true);
   const tracks = useSelector(tracksListSelector);
   const isLoading = useSelector(tracksIsLoadingSelector);
   const error = useSelector(fetchErrorSelector);
   const dispatch = useAppDispatch();

   useEffect(() => {
      if (__PROJECT__ !=='storybook'){
         dispatch(fetchUserTracks());
      }
   }, [dispatch]);

   if (isLoading){
      return <TracksListSkeleton/>;
   }

   if (error && !isLoading){
      return <FetchLoader title={error} action={'На главную'} link={'/account'}/>;
   }

   if (!tracks) {
      return null;
   }

   return (
      <AppBlock padding>
         <ul className={styles.trackList}>
            {tracks.length > 0 ? tracks.map(track => (
               <li key={track._id}>
                  <TrackCard 
                     track={track} 
                     action={<ProgressUpdate type='update' id={track._id} progress={track.progress} habitLength={track.habitLength} status={track.status} />}
                  />
               </li>))
               : 'У вас пока нет ни одного трека'}
         </ul>
      </AppBlock>      
   );
};