import { memo } from 'react';
import { VStack } from 'shared/ui/AppStack';
import { AppText } from 'shared/ui/AppText/AppText';
import { Loader } from 'shared/ui/Loader/Loader';


export const RemoveFetching: React.FC = memo(function RemoveForm() {

   return (
      <VStack max gap='20'>
         <Loader />
         <AppText size='l'>
            Идет удаление трека
         </AppText>
      </VStack>
   );
});