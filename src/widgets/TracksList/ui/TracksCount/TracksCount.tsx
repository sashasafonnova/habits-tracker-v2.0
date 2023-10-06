import { classMaker } from 'shared/lib/classMaker/classMaker';
import { AppText } from 'shared/ui/AppText/AppText';
import { tracksListSelector } from '../../model/selectors/tracksListSelector/tracksListSelector';
import { useSelector } from 'react-redux';
import { tracksIsLoadingSelector } from '../../model/selectors/tracksIsLoadingSelector/tracksIsLoadingSelector';

interface TracksCountProps {
   className?: string;
}

export const TracksCount: React.FC<TracksCountProps> = (props: TracksCountProps) => {
   const { className = '' } = props;

   const userTracks = useSelector(tracksListSelector);
   const isLoading = useSelector(tracksIsLoadingSelector);

   if (isLoading || !userTracks) {
      return (
         <AppText 
            size='l' 
            color='primary' 
            weight='bold' 
            className={classMaker('', [className], {})}
         >
            Мои треки
         </AppText>
      );
   }
   return (
      <AppText 
         size='l' 
         color='primary' 
         weight='bold' 
         className={classMaker('', [className], {})}
      >
         {`Мои треки: ${userTracks.length}`}
      </AppText>
   );
};