import { classMaker } from 'shared/lib/classMaker/classMaker';
import { AppButton } from 'shared/ui/AppButton/AppButton';
import { useCallback } from 'react';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import { fetchProgressUpdate } from '../../model/services/fetchProgressUpdate';
import { getLastUpdated } from '../../model/services/getLastUpdated/getLastUpdated';
import { progressUpdateActions } from '../../model/slice/progressUpdateSlice';

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
   const lastUpdated = getLastUpdated();

   const onClickUpdate = useCallback((id: string) => {
      if (habitLength === progress + 1){
         dispatch(progressUpdateActions.setFetchID(id));
         return dispatch(fetchProgressUpdate({id, progress: progress + 1, status: 'done', lastUpdated}));
      }

      dispatch(progressUpdateActions.setFetchID(id));
      dispatch(fetchProgressUpdate({id, progress: progress + 1, lastUpdated}));
   }, [dispatch, habitLength, lastUpdated, progress]);

   if (status === 'done') {
      return null;
   }

   return (
      <AppButton value={id} onClick={onClickUpdate} className={classMaker('', [className], {})} variant='outline'>
         Отметить
      </AppButton>
   );
};