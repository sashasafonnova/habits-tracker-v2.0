import { memo } from 'react';
import { AppText, AppTextColors, AppTextSizes } from 'shared/ui/AppText/AppText';

interface TrackStatusProps {
   status: string;
}

export const TrackStatus: React.FC<TrackStatusProps> = memo(function TrackStatus(props: TrackStatusProps){
   const { status } = props;

   let textColor;

   switch (status) {
   case 'new': {
      textColor = AppTextColors.PRIMARY;
      break;
   }
   case 'done': {
      textColor = AppTextColors.DONE;
      break;
   }
   case 'omitted': {
      textColor = AppTextColors.ERROR;
      break;
   }    
   }

   return (
      <AppText 
         textSize={AppTextSizes.XS} 
         color={textColor} 
         marginBottom={'5'} 
         mods={{extraBold: true}}
      >
         {status}
      </AppText>
   );
});