import { AppTitle, AppTitleColor, AppTitleVariant } from 'shared/ui/AppTitle/AppTitle';
import styles from './RemoveFetching.module.scss';
import { memo } from 'react';
import { Loader } from 'shared/ui/Loader/Loader';


export const RemoveFetching: React.FC = memo(function RemoveForm() {

   return (
      <div className={styles.removeFetching}>
         <Loader />
         <AppTitle variant={AppTitleVariant.BIG} color={AppTitleColor.MAIN}>
            Идет удаление трека
         </AppTitle>
      </div>
   );
});