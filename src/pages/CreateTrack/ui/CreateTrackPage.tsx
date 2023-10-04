import { CreateForm } from 'features/CreateTrack';
import { GoBack } from 'features/GoBack';
import { AppBlock } from 'shared/ui/AppBlock/AppBlock';
import { VStack } from 'shared/ui/AppStack';


const CreateTrackPage: React.FC = () => {

   return (
      <AppBlock type='page' container>
         <VStack gap='40' max>
            <GoBack />
            <CreateForm/>
         </VStack>
      </AppBlock>
   );
};

export default CreateTrackPage;