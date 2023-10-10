import { memo } from 'react';
import { VStack } from 'shared/ui/AppStack';
import { AppText } from 'shared/ui/AppText/AppText';
import { AppLoader } from 'shared/ui/AppLoader/AppLoader';


export const RemoveFetching: React.FC = memo(function RemoveForm() {

   return (
      <VStack max gap='20'>
         <AppLoader />
         <AppText size='l'>
            Идет удаление трека
         </AppText>
      </VStack>
   );
});