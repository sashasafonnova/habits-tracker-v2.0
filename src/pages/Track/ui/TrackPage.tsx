import { GoBack } from 'features/GoBack';
import { AppBlock } from 'shared/ui/AppBlock/AppBlock';
import { VStack } from 'shared/ui/AppStack';
import { TrackSettings } from 'widgets/TrackSettings';

const TrackPage: React.FC = () => {

   return (
      <AppBlock type='page' container padding>
         <VStack gap='40' max>
            <GoBack />
            <TrackSettings />
         </VStack>
      </AppBlock>
   );
};

export default TrackPage;