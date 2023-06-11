import { AppTitle, AppTitleVariant } from 'shared/ui/AppTitle/AppTitle';
import { useSelector } from 'react-redux';
import { authDataSelector } from 'entities/User';


const AccountPage: React.FC = () => {

   const { firstName } = useSelector(authDataSelector);
   
   return (
      <div className='page'>
         <div className='container'>
            <AppTitle variant={AppTitleVariant.STANDART}>{`Привет, ${firstName}`}</AppTitle>
         </div>
      </div>
   );
};

export default AccountPage;