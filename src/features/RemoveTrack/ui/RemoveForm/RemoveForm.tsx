import { AppTitle, AppTitleColor, AppTitleVariant } from 'shared/ui/AppTitle/AppTitle';
import styles from './RemoveForm.module.scss';
import { AppButton, AppButtonVariant } from 'shared/ui/AppButton/AppButton';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import { fetchRemoveTrack } from '../../model/services/fetchRemoveTrack';
import { memo } from 'react';

interface RemoveFormProps {
   id: string;
   onClose: () => void
}

export const RemoveForm: React.FC<RemoveFormProps> = memo(function RemoveForm(props: RemoveFormProps){

   const { id, onClose } = props;

   const dispatch = useAppDispatch();
   
   const onCLickRemove = () => {
      dispatch(fetchRemoveTrack({trackId: id}));
   };

   const onClickCancel = () => {
      onClose();
   };

   return (
      <div className={styles.removeForm}>
         <AppTitle variant={AppTitleVariant.BIG} color={AppTitleColor.PRIMARY} marginBottom={'20'}>Вы действительно хотите удалить трек?</AppTitle>         
         <div className={styles.btns}>
            <AppButton variant={AppButtonVariant.CLEAR_RED} onClick={onCLickRemove}>Удалить</AppButton>
            <AppButton variant={AppButtonVariant.CLEAR_TEXT} onClick={onClickCancel}>Отменить</AppButton>
         </div>
      </div>
   );
});