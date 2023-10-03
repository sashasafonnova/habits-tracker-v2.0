import { CreateForm } from 'features/CreateTrack';
import styles from './CreateTrackPage.module.scss';
import { GoBack } from 'features/GoBack';


const CreateTrackPage: React.FC = () => {

   return (
      <div className='page'>
         <section className={styles.navigation}>
            <div className='container'>
               <GoBack />
            </div>
         </section>
         <CreateForm/>
      </div>
   );
};

export default CreateTrackPage;