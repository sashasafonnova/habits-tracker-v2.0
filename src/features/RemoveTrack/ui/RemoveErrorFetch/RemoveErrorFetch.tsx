import styles from './RemoveErrorFetch.module.scss';
import { memo } from 'react';
import { AppLink, AppLinkVariant } from 'shared/ui/AppLink/AppLink';
import { AppText } from 'shared/ui/AppText/AppText';


export const RemoveErrorFetch: React.FC = memo(function RemoveForm() {

   return (
      <div className={styles.removeErrorFetch}>
         <AppText size='l'>
            Не удалось удалить трек
         </AppText>
         <AppLink to={'/tracks'} variant={AppLinkVariant.UNDERLINE}>
            Вернуться к трекам
         </AppLink>
      </div>
   );
});