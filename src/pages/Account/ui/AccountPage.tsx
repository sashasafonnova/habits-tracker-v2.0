import { AppTitle, AppTitleVariant } from 'shared/ui/AppTitle/AppTitle';
import { useSelector } from 'react-redux';
import { authDataSelector } from 'entities/User';
import { AppBlock } from 'shared/ui/AppBlock/AppBlock';


const AccountPage: React.FC = () => {

   const { firstName } = useSelector(authDataSelector);
   
   return (
      <AppBlock type='page'>
         <AppTitle variant={AppTitleVariant.STANDART}>{`Привет, ${firstName}`}</AppTitle>
      </AppBlock>
   );
};

export default AccountPage;