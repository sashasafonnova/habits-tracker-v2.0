import { LoginForm } from 'features/AuthByEmail';
import { AppBlock } from 'shared/ui/AppBlock/AppBlock';


const LoginPage: React.FC = () => {
   return (
      <AppBlock type='page'>
         <LoginForm/>
      </AppBlock>
   );
};

export default LoginPage;