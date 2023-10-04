import React, { memo } from 'react';
import { useNavigate } from 'react-router-dom';
import { AppButton } from 'shared/ui/AppButton/AppButton';


export const GoBack: React.FC = memo(function GoBack(){

   const navigate = useNavigate();

   return (
      <AppButton variant='underline' onClick={() => navigate(-1)}>← Назад</AppButton>
   );
});

