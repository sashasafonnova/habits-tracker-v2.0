import { classMaker } from 'shared/lib/classMaker/classMaker';
import { AppButton } from 'shared/ui/AppButton/AppButton';
import { useCallback } from 'react';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import { fetchProgressUpdate } from '../../model/services/fetchProgressUpdate';

interface ProgressUpdateButtonProps {
   className?: string;
   id: string;
   progress: number;
   habitLength: number;
   status: string;
}

export const ProgressUpdateButton: React.FC<ProgressUpdateButtonProps> = (props: ProgressUpdateButtonProps) => {
   const { className = '', id, progress, habitLength, status } = props;
   const dispatch = useAppDispatch();

   const onClickUpdate = useCallback(() => {
      if (habitLength === progress + 1){
         return dispatch(fetchProgressUpdate({id, progress: progress + 1, status: 'done'}));
      }

      dispatch(fetchProgressUpdate({id, progress: progress + 1}));
   }, [dispatch, habitLength, id, progress]);

   if (status === 'done') {
      return null;
   }

   return (
      <AppButton onClick={onClickUpdate} className={classMaker('', [className], {})} variant='outline'>
         Отметить
      </AppButton>
   );
};