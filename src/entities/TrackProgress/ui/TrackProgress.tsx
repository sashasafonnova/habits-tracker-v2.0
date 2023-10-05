import { memo } from 'react';
import ProgressIcon from '../assets/icons/progress-icon.svg';
import { progressCalc } from '../lib/progressCalc';
import { HStack } from 'shared/ui/AppStack';
import { AppText } from 'shared/ui/AppText/AppText';


interface ProgressCalcProps {
   progress: number;
   trackLength: number;
}


export const TrackProgress: React.FC<ProgressCalcProps> = memo(function ProgressCalc(props: ProgressCalcProps) {
   
   const { progress, trackLength } = props;

   return (
      <HStack gap='10'>
         <ProgressIcon/>
         <AppText>{`Прогресс: ${progress} из ${trackLength} (${progressCalc(trackLength, progress)})`}</AppText>
      </HStack>
   );
});   