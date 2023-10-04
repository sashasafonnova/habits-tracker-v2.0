import { RemoveSwitcher } from 'features/RemoveTrack';
import { useSelector } from 'react-redux';
import { TrackProfile, profileDataSelector } from 'entities/TrackProfile';
import { AppBlock } from 'shared/ui/AppBlock/AppBlock';

export const TrackSettings: React.FC = () => {

   const profileData = useSelector(profileDataSelector);
   
   return (
      <AppBlock>
         <TrackProfile />
         {Object.keys(profileData).length > 0 && <RemoveSwitcher/>}
      </AppBlock>
            
   );
};