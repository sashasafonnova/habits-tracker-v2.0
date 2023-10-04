import { AppTitle, AppTitleColor, AppTitleVariant } from 'shared/ui/AppTitle/AppTitle';
import { AppBlock } from 'shared/ui/AppBlock/AppBlock';


export const NotFoundPage: React.FC = () => {

   return (
      <AppBlock type='page' container>
         <AppTitle variant={AppTitleVariant.LARGE} color={AppTitleColor.PRIMARY}>Страница не найдена</AppTitle>
      </AppBlock>
   );
};