import React from 'react';
import styles from './ArrowBack.module.scss';

import { useNavigate } from 'react-router-dom';
import { AppButton, AppButtonVariant } from 'shared/ui/AppButton/AppButton';


export const ArrowBack: React.FC = () => {

   const navigate = useNavigate();

   
   return (
      <div className={styles.btn}>
         <div className='container'>
            <AppButton variant={AppButtonVariant.UNDERLINE} onClick={() => navigate(-1)}>
               ← Назад
            </AppButton>
         </div>
         
      </div>
      
   );
};

