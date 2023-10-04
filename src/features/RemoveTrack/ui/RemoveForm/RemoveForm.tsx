import { AppTitle, AppTitleColor, AppTitleVariant } from 'shared/ui/AppTitle/AppTitle';
import styles from './RemoveForm.module.scss';
import { AppButton } from 'shared/ui/AppButton/AppButton';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import { fetchRemoveTrack } from '../../model/services/fetchRemoveTrack';
import { memo } from 'react';
import { useParams } from 'react-router-dom';


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
      <div className={styles.removeForm}>
         <AppTitle variant={AppTitleVariant.BIG} color={AppTitleColor.MAIN} marginBottom={'20'}>Вы действительно хотите удалить трек?</AppTitle>         
         <div className={styles.btns}>
            <AppButton onClick={onCLickRemove}>Удалить</AppButton>
            <AppButton onClick={onClickCancel}>Отменить</AppButton>
         </div>
      </div>
   );
});