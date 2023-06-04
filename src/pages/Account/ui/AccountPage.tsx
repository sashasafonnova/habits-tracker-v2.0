import { TrackList } from 'widgets/TrackList';
import styles from './AccountPage.module.scss';
import { AppTitle, AppTitleColor, AppTitleVariant } from 'shared/ui/AppTitle/AppTitle';


const AccountPage: React.FC = () => {

   return (
      <div className={styles.page}>
         <div className='container'>
            <AppTitle variant={AppTitleVariant.LARGE} color={AppTitleColor.PRIMARY} marginBottom={'40'}>Мои треки</AppTitle>
            <TrackList />
         </div>
      </div>
   );
};

export default AccountPage;