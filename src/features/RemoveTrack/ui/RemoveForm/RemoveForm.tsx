import styles from './RemoveForm.module.scss';
import { AppButton } from 'shared/ui/AppButton/AppButton';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import { fetchRemoveTrack } from '../../model/services/fetchRemoveTrack';
import { memo } from 'react';
import { useParams } from 'react-router-dom';
import { AppText } from 'shared/ui/AppText/AppText';
import { HStack, VStack } from 'shared/ui/AppStack';


interface RemoveFormProps {
   onClose: () => void
}

export const RemoveForm: React.FC<RemoveFormProps> = memo(function RemoveForm(props: RemoveFormProps){

   const { onClose } = props;

   const dispatch = useAppDispatch();
   const { id } = useParams();
   
   const onCLickRemove = () => {
      dispatch(fetchRemoveTrack({trackId: id}));
   };

   const onClickCancel = () => {
      onClose();
   };

   return (
      <VStack max gap='20'>
         <AppText size='l'>Вы действительно хотите удалить трек?</AppText>         
         <HStack className={styles.btns} max gap='20'>
            <AppButton onClick={onCLickRemove}>Удалить</AppButton>
            <AppButton onClick={onClickCancel}>Отменить</AppButton>
         </HStack>
      </VStack>
   );
});