import { Modal } from 'shared/ui/Modal/Modal';
import { RemoveForm } from '../RemoveForm/RemoveForm';
import { useStateCreator } from 'shared/lib/hooks/useStateCreator';
import { removeTrackReducer } from '../../model/slice/removeTrackSlice';
import { useSelector } from 'react-redux';
import { removeStatusSelector } from '../../model/selectors/removeStatusSelector';
import { RemoveTrackStatuses } from '../../model/types/RemoveTrackSchema';
import { RemoveFetching } from '../RemoveFetching/RemoveFetching';
import { RemoveErrorFetch } from '../RemoveErrorFetch/RemoveErrorFetch';

interface RemoveModalProps {
   onClose: () => void;
}

export const RemoveModal: React.FC<RemoveModalProps> = (props: RemoveModalProps) => {
   const { onClose } = props;

   useStateCreator({ removeTrack: removeTrackReducer }, true);
   const removeStatus = useSelector(removeStatusSelector);


   if (removeStatus === RemoveTrackStatuses.IS_DELETING){
      return (
         <Modal>
            <RemoveFetching/>
         </Modal>
      );
   }

   if (removeStatus === RemoveTrackStatuses.ERROR) {
      return (
         <Modal>
            <RemoveErrorFetch />
         </Modal>
      );
   }

   return (
      <Modal>
         <RemoveForm onClose={onClose} />
      </Modal>
   );
};