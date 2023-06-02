import { TrackList } from 'widgets/TrackList';
import styles from './AccountPage.module.scss';


const AccountPage: React.FC = () => {
   return (
      <div className={styles.page}>
         <TrackList/>
      </div>
   );
};

export default AccountPage;