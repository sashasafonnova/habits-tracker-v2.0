import { classMaker } from 'shared/lib/classMaker/classMaker';
import { useCallback } from 'react';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import { fetchProgressUpdate } from '../../model/services/fetchProgressUpdate';
import { AppButton } from 'shared/ui/AppButton/AppButton';

interface ProgressResetButtonProps {
   className?: string;
   id: string;
   status: string;
}

export const ProgressResetButton: React.FC<ProgressResetButtonProps> = (props: ProgressResetButtonProps) => {
   const { className = '', id, status } = props;
   const dispatch = useAppDispatch();

   const onClickReset = useCallback(() => {
      dispatch(fetchProgressUpdate({id, progress: 0, status: 'active'}));
   }, [dispatch, id]);

   return (
      <AppButton onClick={onClickReset} className={classMaker('', [className], {})} variant='outline'>
         {status !== 'done' ? 'Начать сначала' : 'Сбросить результат'}
      </AppButton>
   );
};