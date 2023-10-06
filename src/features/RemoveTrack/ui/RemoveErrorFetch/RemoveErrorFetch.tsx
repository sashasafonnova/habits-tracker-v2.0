import styles from './RemoveErrorFetch.module.scss';
import { memo } from 'react';
import { AppLink } from 'shared/ui/AppLink/AppLink';
import { AppText } from 'shared/ui/AppText/AppText';


export const RemoveErrorFetch: React.FC = memo(function RemoveForm() {

   return (
      <div className={styles.removeErrorFetch}>
         <AppText size='l'>
            Не удалось удалить трек
         </AppText>
         <AppLink to={'/tracks'} variant='underline'>
            Вернуться к трекам
         </AppLink>
      </div>
   );
});