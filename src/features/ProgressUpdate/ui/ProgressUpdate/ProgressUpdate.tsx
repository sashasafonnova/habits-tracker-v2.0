import { classMaker } from 'shared/lib/classMaker/classMaker';
import { ProgressUpdateButton } from '../ProgressUpdateButton/ProgressUpdateButton';
import { ProgressResetButton } from '../ProgressResetButton/ProgressResetButton';
import { HStack } from 'shared/ui/AppStack';
import { useSelector } from 'react-redux';
import { isFetchingUpdateSelector } from 'features/ProgressUpdate/model/selectors/isFetchingUpdateSelector';
import { AppLoader } from 'shared/ui/AppLoader/AppLoader';
import { progressUpdateReducer } from '../../model/slice/progressUpdateSlice';
import { useStateCreator } from 'shared/lib/hooks/useStateCreator';
import { fetchIDUpdateSelector } from '../../model/selectors/fetchIDUpdateSelector';

interface ProgressUpdateProps {
   className?: string;
   type: 'all' | 'reset' | 'update';
   id?: string;
   progress?: number;
   habitLength?: number;
   status?: string;
}

export const ProgressUpdate: React.FC<ProgressUpdateProps> = (props: ProgressUpdateProps) => {
   const { className = '', id, progress, habitLength, status, type } = props;
   useStateCreator({ progressUpdate: progressUpdateReducer }, true);
   const isFetching = useSelector(isFetchingUpdateSelector);
   const fetchID = useSelector(fetchIDUpdateSelector);
   

   if (type === 'all'){
      return (
         <HStack className={classMaker('', [className], {})} gap='10'>
            <ProgressUpdateButton id={id || ''} progress={progress || 0} habitLength={habitLength || 0} status={status || ''} />
            <ProgressResetButton id={id || ''} status={status || ''}/>
            {isFetching && fetchID === id && <AppLoader width={30} height={40}/>}
         </HStack>
      );
   }

   if (type === 'update'){
      return (
         <HStack className={classMaker('', [className], {})} gap='10'>
            <ProgressUpdateButton id={id || ''} progress={progress || 0} habitLength={habitLength || 0} status={status || ''} />
            {isFetching && fetchID === id &&  <AppLoader width={40} height={40} />}
         </HStack>
      );
   }

   return (
      <HStack className={classMaker('', [className], {})} gap='10'>
         <ProgressResetButton id={id || ''} status={status || ''}/>
         {isFetching && fetchID === id && <AppLoader width={40} height={40} />}
      </HStack>
   );
};
