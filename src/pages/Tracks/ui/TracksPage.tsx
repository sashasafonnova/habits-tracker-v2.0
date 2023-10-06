import { AppBlock } from 'shared/ui/AppBlock/AppBlock';
import { HStack } from 'shared/ui/AppStack';
import { AppLink } from 'shared/ui/AppLink/AppLink';
import { RoutePath } from 'app/providers/routerProvider/config/router';
import { TrackList, TracksCount } from 'widgets/TracksList';

const TracksPage: React.FC = () => {

   return (
      <AppBlock type='page' container padding>
         <HStack justify='between' align='center'>
            <TracksCount />
            <AppLink to={RoutePath.create_track} variant='button'>Создать</AppLink>
         </HStack>
         <TrackList />         
      </AppBlock>
   );
};

export default TracksPage;