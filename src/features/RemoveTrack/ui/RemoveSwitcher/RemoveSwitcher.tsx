import { memo, useCallback, useState } from 'react';
import { AppButton } from 'shared/ui/AppButton/AppButton';
import { RemoveModal } from '../RemoveModal/RemoveModal';


export const RemoveSwitcher: React.FC = memo(function RemoveSwitcher(){
   
   const [removeModal, setRemoveModal] = useState(false);

   const closeRemoveModal = useCallback(() => {
      setRemoveModal(false);
   }, [setRemoveModal]);

   const openRemoveModal = useCallback(() => {
      setRemoveModal(true);
   }, [setRemoveModal]);


   return (
      <>
         <AppButton onClick={openRemoveModal}>Удалить трек</AppButton>
         {removeModal && <RemoveModal onClose={closeRemoveModal} />}  
      </>
   );
});