import { memo, useCallback, useState } from 'react';
import { useParams } from 'react-router-dom';
import { AppButton, AppButtonVariant } from 'shared/ui/AppButton/AppButton';
import { Modal } from 'shared/ui/Modal/Modal';
import { RemoveForm } from '../RemoveForm/RemoveForm';


export const RemoveSwitcher: React.FC = memo(function RemoveSwitcher(){

   const [showModal, setShowModal] = useState(false);
   const { id } = useParams();

   const onClick = useCallback(() => {
      setShowModal(true);
   }, []);

   const onClose = useCallback(() => {
      setShowModal(false);
   }, []);
   

   return (
      <>
         <AppButton variant={AppButtonVariant.CLEAR_RED} onClick={onClick}>Удалить трек</AppButton>
         {showModal && <Modal><RemoveForm id={id} onClose={onClose}/></Modal>}
      </>
      
   );
});