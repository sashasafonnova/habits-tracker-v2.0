import { AppButton } from 'shared/ui/AppButton/AppButton';
import styles from './AppError.module.scss';
import { useNavigate } from 'react-router-dom';
import { memo } from 'react';
import { AppText } from 'shared/ui/AppText/AppText';
import { AppBlock } from 'shared/ui/AppBlock/AppBlock';


export const AppError: React.FC = memo(function AppError(){

   const navigate = useNavigate();

   const reloadPage = () => {
      navigate(0);
   };
   
   return (
      <AppBlock className={styles.appError} Tag='section'>
         <AppText size='l'>Произошла непредвиденная ошибка</AppText>
         <AppButton variant='background' onClick={reloadPage}>
            Обновить страницу
         </AppButton>
      </AppBlock>
   );
});