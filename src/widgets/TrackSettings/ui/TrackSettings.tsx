import { RemoveSwitcher, removeTrackActions } from 'features/RemoveTrack';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { removeStatusSelector } from 'features/RemoveTrack';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import { TrackProfile, profileDataSelector, trackProfileActions } from 'entities/TrackProfile';
import { RemoveTrackStatuses } from 'features/RemoveTrack';
import { FetchLoader } from 'shared/ui/FetchLoader/FetchLoader';


export const TrackSettings: React.FC = () => {

   const removeStatus = useSelector(removeStatusSelector);
   const profileData = useSelector(profileDataSelector);
   const dispatch = useAppDispatch();

   useEffect(() => {

      return () => {
         dispatch(trackProfileActions.clearProfileData());
         dispatch(removeTrackActions.clearRemoveStatus());
      };
   }, []);


   if (removeStatus === RemoveTrackStatuses.DELETED) {
      return <FetchLoader title={'Трек успешно удален'} action={'К списку треков'} link={'/tracks'}/>;
   }


   if (removeStatus === RemoveTrackStatuses.IS_DELETING) {
      return <FetchLoader title={'Идет удаление трека...'} loader={true}/>;
   }


   if (removeStatus === RemoveTrackStatuses.ERROR) {
      return (
         <FetchLoader title={'Не удалось удалить трек'} action={'К списку треков'} link={'/tracks'}/>
      );
   }

   return (
      <section>
         <div className='container'>
            <TrackProfile />
            {Object.keys(profileData).length > 0 && <RemoveSwitcher />}
         </div>
      </section>
   );
};