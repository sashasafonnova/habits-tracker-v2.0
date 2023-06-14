import { AppTitle, AppTitleColor, AppTitleVariant } from 'shared/ui/AppTitle/AppTitle';
import styles from './RemoveErrorFetch.module.scss';
import { memo } from 'react';
import { AppLink, AppLinkVariant } from 'shared/ui/AppLink/AppLink';


export const RemoveErrorFetch: React.FC = memo(function RemoveForm() {

   return (
      <div className={styles.removeErrorFetch}>
         <AppTitle variant={AppTitleVariant.BIG} color={AppTitleColor.MAIN} marginBottom={'20'}>
            Не удалось удалить трек
         </AppTitle>
         <AppLink to={'/tracks'} variant={AppLinkVariant.UNDERLINE}>
            Вернуться к трекам
         </AppLink>
      </div>
   );
});