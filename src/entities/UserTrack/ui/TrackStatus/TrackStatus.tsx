import { memo } from 'react';
import { AppText, AppTextColors } from 'shared/ui/AppText/AppText';

interface TrackStatusProps {
   status: string;
}

export const TrackStatus: React.FC<TrackStatusProps> = memo(function TrackStatus(props: TrackStatusProps){
   const { status } = props;

   let textColor: AppTextColors;

   switch (status) {
   case 'new': {
      textColor = 'primary';
      break;
   }
   case 'done': {
      textColor = 'done';
      break;
   }
   case 'omitted': {
      textColor = 'error';
      break;
   }    
   }

   return (
      <AppText 
         size='xs'
         color={textColor} 
      >
         {status}
      </AppText>
   );
});