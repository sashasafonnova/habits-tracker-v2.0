import { useEffect } from 'react'; 
import { useParams } from 'react-router-dom';
import { fetchTrackProfile } from '../../model/services/fetchTrackProfile/fetchTrackProfile';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import { useSelector } from 'react-redux';
import { profileDataSelector } from '../../model/selectors/profileDataSelector/profileDataSelector';
import { profileIsLoadingSelector } from '../../model/selectors/profileIsLoadingSelector/profileIsLoadingSelector';
import { profileErrorSelector } from '../../model/selectors/profileErrorSelector/profileErrorSelector';
import { FetchLoader } from 'shared/ui/FetchLoader/FetchLoader';
import { trackProfileReducer } from '../../model/slice/trackProfileSlice';
import { useStateCreator } from 'shared/lib/hooks/useStateCreator';
import { profileExistStatusSelector } from '../../model/selectors/profileExistStatusSelector/profileExistStatusSelector';
import { TrackProfileCard, TrackProfileSkeleton } from 'entities/UserTrack';
import { ProgressUpdate } from 'features/ProgressUpdate';

export const TrackProfile: React.FC = () => {

   useStateCreator({ trackProfile: trackProfileReducer }, true);

   const dispatch = useAppDispatch();
   const { id } = useParams();
   const profileData = useSelector(profileDataSelector);
   const isLoading = useSelector(profileIsLoadingSelector);
   const error = useSelector(profileErrorSelector);
   const existStatus = useSelector(profileExistStatusSelector);

   useEffect(() => {
      if (__PROJECT__ !== 'storybook' && id) {
         dispatch(fetchTrackProfile({ trackId: id }));
      }
   }, [dispatch, id]);

   if (isLoading) {
      return <TrackProfileSkeleton />;
   }

   if (error && !isLoading) {
      return <FetchLoader title={error} action={'Вернуться к списку'} link={'/tracks'} />;
   }

   if (existStatus === 'deleted') {
      return <FetchLoader title={'Трек успешно удален'} action={'Вернуться к списку'} link={'/tracks'} />;
   }

   if (!profileData) {
      return null;
   }

   return (
      <TrackProfileCard 
         track={profileData} 
         actions={
            <ProgressUpdate
               id={id} 
               type='all'
               progress={profileData?.progress || 0} 
               habitLength={profileData?.habitLength} status={profileData?.status} 
            />
         }/>
   );
};