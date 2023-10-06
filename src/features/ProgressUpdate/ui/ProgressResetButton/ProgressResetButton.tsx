import { classMaker } from 'shared/lib/classMaker/classMaker';
import { useCallback } from 'react';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import { fetchProgressUpdate } from '../../model/services/fetchProgressUpdate';
import { AppButton } from 'shared/ui/AppButton/AppButton';
import { userTracksSelector } from 'entities/UserTrack';
import { useSelector } from 'react-redux';

interface ProgressResetButtonProps {
   className?: string;
   id: string;
}

export const ProgressResetButton: React.FC<ProgressResetButtonProps> = (props: ProgressResetButtonProps) => {
   const { className = '', id } = props;
   const dispatch = useAppDispatch();
   const { status } = useSelector(userTracksSelector)[0];

   const onClickReset = useCallback(() => {
      dispatch(fetchProgressUpdate({id, progress: 0, status: 'active'}));
   }, []);

   return (
      <AppButton onClick={onClickReset} className={classMaker('', [className], {})} variant='outline'>
         {status !== 'done' ? 'Начать сначала' : 'Сбросить результат'}
      </AppButton>
   );
};