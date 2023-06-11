import { AppTitle, AppTitleColor, AppTitleVariant } from 'shared/ui/AppTitle/AppTitle';

import { useSelector } from 'react-redux';
import { TrackList, tracksIsLoadingSelector, userTracksSelector } from 'entities/UserTrack';


const TracksPage: React.FC = () => {

   const userTracks = useSelector(userTracksSelector);
   const isLoading = useSelector(tracksIsLoadingSelector);
   const userTracksCount = userTracks.length === 0 || isLoading ? 'Мои треки' : `Мои треки: ${userTracks.length}`;

   return (
      <div className='page'>
         <div className='container'>
            <AppTitle variant={AppTitleVariant.BIG} color={AppTitleColor.PRIMARY} marginBottom={'40'}>{userTracksCount}</AppTitle>
            <TrackList />
         </div>
      </div>
   );
};

export default TracksPage;