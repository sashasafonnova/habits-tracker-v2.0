import { RemoveSwitcher } from 'features/RemoveTrack';
import { useSelector } from 'react-redux';
import { TrackProfile, profileDataSelector } from 'entities/TrackProfile';


export const TrackSettings: React.FC = () => {

   const profileData = useSelector(profileDataSelector);
   
   return (
      <section>
         <div className='container'>
            <TrackProfile />
            {Object.keys(profileData).length > 0 && <RemoveSwitcher/>}
         </div>
      </section>
   );
};