import { classMaker } from 'shared/lib/classMaker/classMaker';
import { AppButton } from 'shared/ui/AppButton/AppButton';
import { useCallback } from 'react';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import { fetchProgressUpdate } from '../../model/services/fetchProgressUpdate';
import { useSelector } from 'react-redux';
import { userTracksSelector } from 'entities/UserTrack';

interface ProgressUpdateButtonProps {
   className?: string;
   id: string;
}

export const ProgressUpdateButton: React.FC<ProgressUpdateButtonProps> = (props: ProgressUpdateButtonProps) => {
   const { className = '', id } = props;
   const dispatch = useAppDispatch();
   const { progress, habitLength, status } = useSelector(userTracksSelector)[0];

   const onClickUpdate = useCallback(() => {
      if (habitLength === progress + 1){
         return dispatch(fetchProgressUpdate({id, progress: progress + 1, status: 'done'}));
      }

      dispatch(fetchProgressUpdate({id, progress: progress + 1}));
   }, []);

   if (status === 'done') {
      return null;
   }

   return (
      <AppButton onClick={onClickUpdate} className={classMaker('', [className], {})} variant='outline'>
         Отметить
      </AppButton>
   );
};