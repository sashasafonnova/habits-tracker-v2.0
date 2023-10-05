import { AppBlock } from 'shared/ui/AppBlock/AppBlock';
import { AppText } from 'shared/ui/AppText/AppText';


export const NotFoundPage: React.FC = () => {

   return (
      <AppBlock type='page' container>
         <AppText color='primary' size='l'>Страница не найдена</AppText>
      </AppBlock>
   );
};