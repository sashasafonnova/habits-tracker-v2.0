import { memo, useEffect } from 'react'; 
// import styles from './TrackProfileCard.module.scss';
import { useParams } from 'react-router-dom';
import { fetchTrackProfile } from '../../model/services/fetchTrackProfile';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import { TrackProfileSkeleton } from '../TrackProfileSkeleton/TrackProfileSkeleton';
import { useSelector } from 'react-redux';
import { profileDataSelector } from '../../model/selectors/profileDataSelector';
import { profileIsLoadingSelector } from '../../model/selectors/profileIsLoadingSelector';
import { profileErrorSelector } from '../../model/selectors/profileErrorSelector';
import { TrackCard } from 'entities/UserTrack';
import { FetchLoader } from 'shared/ui/FetchLoader/FetchLoader';



export const TrackProfile: React.FC = memo(function TrackProfileCard() {

   const dispatch = useAppDispatch();
   const { id } = useParams();
   const track = useSelector(profileDataSelector);
   const isLoading = useSelector(profileIsLoadingSelector);
   const error = useSelector(profileErrorSelector);


   useEffect(() => {
      if (__PROJECT__ !== 'storybook') {
         dispatch(fetchTrackProfile({ trackId: id }));
      }

   }, []);

   if (isLoading) {
      return <TrackProfileSkeleton />;
   }

   if (error && !isLoading) {
      return <FetchLoader title={error} action={'Вернуться к списку'} link={'/tracks'} />;
   }

   return (
      <TrackCard track={track}/>
   );
});