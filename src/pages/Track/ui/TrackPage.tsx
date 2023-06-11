import styles from './TrackPage.module.scss';
import { GoBack } from 'features/GoBack';
import { TrackSettings } from 'widgets/TrackSettings';


const TrackPage: React.FC = () => {

   return (
      <div className='page'>
         <section className={styles.navigation}>
            <div className='container'>
               <GoBack />
            </div>
         </section>
         <TrackSettings />
      </div>
   );
};

export default TrackPage;