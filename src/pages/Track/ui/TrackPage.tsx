import { GoBack } from 'features/GoBack';
import { RemoveSwitcher } from 'features/RemoveTrack';
import { AppBlock } from 'shared/ui/AppBlock/AppBlock';
import { VStack } from 'shared/ui/AppStack';
import { TrackProfile } from 'widgets/TrackProfile';

const TrackPage: React.FC = () => {

   return (
      <AppBlock type='page' container padding>
         <VStack gap='40' max>
            <GoBack />
            <TrackProfile />
            <RemoveSwitcher/>
         </VStack>
      </AppBlock>
   );
};

export default TrackPage;