import { useSelector } from 'react-redux';
import { TrackList, tracksIsLoadingSelector, userTracksSelector } from 'entities/UserTrack';
import { AppBlock } from 'shared/ui/AppBlock/AppBlock';
import { HStack } from 'shared/ui/AppStack';
import { AppLink } from 'shared/ui/AppLink/AppLink';
import { RoutePath } from 'app/providers/routerProvider/config/router';
import { AppText } from 'shared/ui/AppText/AppText';

const TracksPage: React.FC = () => {

   const userTracks = useSelector(userTracksSelector);
   const isLoading = useSelector(tracksIsLoadingSelector);
   const userTracksCount = userTracks.length === 0 || isLoading ? 'Мои треки' : `Мои треки: ${userTracks.length}`;

   return (
      <AppBlock type='page' container padding>
         <HStack justify='between' align='center'>
            <AppText size='l' color='primary' weight='bold'>{userTracksCount}</AppText>
            <AppLink to={RoutePath.create_track} variant='button'>Создать</AppLink>
         </HStack>
         <TrackList />         
      </AppBlock>
   );
};

export default TracksPage;