import { classMaker } from 'shared/lib/classMaker/classMaker';
import { useCallback } from 'react';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import { fetchProgressUpdate } from '../../model/services/fetchProgressUpdate';
import { AppButton } from 'shared/ui/AppButton/AppButton';
import { getLastUpdated } from '../../model/services/getLastUpdated/getLastUpdated';
import { progressUpdateActions } from '../../model/slice/progressUpdateSlice';

interface ProgressResetButtonProps {
   className?: string;
   id: string;
   status: string;
}

export const ProgressResetButton: React.FC<ProgressResetButtonProps> = (props: ProgressResetButtonProps) => {
   const { className = '', id, status } = props;
   const dispatch = useAppDispatch();
   const lastUpdated = getLastUpdated();

   const onClickReset = useCallback((id: string) => {
      dispatch(progressUpdateActions.setFetchID(id));
      dispatch(fetchProgressUpdate({id, progress: 0, status: 'active', lastUpdated}));
   }, [dispatch, lastUpdated]);

   return (
      <AppButton value={id} onClick={onClickReset} className={classMaker('', [className], {})} variant='outline'>
         {status !== 'done' ? 'Начать сначала' : 'Сбросить результат'}
      </AppButton>
   );
};