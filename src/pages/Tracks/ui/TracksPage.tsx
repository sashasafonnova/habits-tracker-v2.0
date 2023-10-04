import { AppTitle, AppTitleColor, AppTitleVariant } from 'shared/ui/AppTitle/AppTitle';
import { useSelector } from 'react-redux';
import { TrackList, tracksIsLoadingSelector, userTracksSelector } from 'entities/UserTrack';
import { AppBlock } from 'shared/ui/AppBlock/AppBlock';
import { VStack } from 'shared/ui/AppStack';

const TracksPage: React.FC = () => {

   const userTracks = useSelector(userTracksSelector);
   const isLoading = useSelector(tracksIsLoadingSelector);
   const userTracksCount = userTracks.length === 0 || isLoading ? 'Мои треки' : `Мои треки: ${userTracks.length}`;

   return (
      <AppBlock type='page' container>
         <VStack gap='40' max>
            <AppTitle variant={AppTitleVariant.BIG} color={AppTitleColor.PRIMARY}>{userTracksCount}</AppTitle>
            <TrackList />
         </VStack>
      </AppBlock>
   );
};

export default TracksPage;