import { useEffect } from 'react'; 
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
import { trackProfileReducer } from '../../model/slice/trackProfileSlice';
import { useStateCreator } from 'shared/lib/hooks/useStateCreator';
import { profileExistStatusSelector } from '../../model/selectors/profileExistStatusSelector';


export const TrackProfile: React.FC = () => {

   useStateCreator({ trackProfile: trackProfileReducer }, true);

   const dispatch = useAppDispatch();
   const { id } = useParams();
   const profileData = useSelector(profileDataSelector);
   const isLoading = useSelector(profileIsLoadingSelector);
   const error = useSelector(profileErrorSelector);
   const existStatus = useSelector(profileExistStatusSelector);


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

   if (existStatus === 'deleted') {
      return <FetchLoader title={'Трек успешно удален'} action={'Вернуться к списку'} link={'/tracks'} />;
   }

   return (
      <TrackCard track={profileData}/>
   );
};