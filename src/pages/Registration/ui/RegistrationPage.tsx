import { RegistrationForm } from 'features/RegistrationByEmail';
import { AppBlock } from 'shared/ui/AppBlock/AppBlock';

const RegistrationPage: React.FC = () => {
   return (
      <AppBlock type='page'>
         <RegistrationForm/>
      </AppBlock>
   );
};

export default RegistrationPage;