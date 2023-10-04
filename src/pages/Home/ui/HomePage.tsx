import { AppBlock } from 'shared/ui/AppBlock/AppBlock';
import { Home } from 'widgets/Home';


export const HomePage: React.FC = () => {

   return (
      <AppBlock type='page'>
         <Home/>
      </AppBlock>
   );
};