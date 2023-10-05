import { categories } from '../consts/categories';
import { memo } from 'react';
import { classMaker } from 'shared/lib/classMaker/classMaker';
import { AppIcon } from 'shared/ui/AppIcon/AppIcon';
import { HStack } from 'shared/ui/AppStack';
import { AppText } from 'shared/ui/AppText/AppText';


interface TrackCategoriesProps {
   className?: string;
   category: string;
}


export const TrackCategory: React.FC<TrackCategoriesProps> = memo(function TrackCategory(props: TrackCategoriesProps){
   const { className = '', category } = props;

   return (
      <div className={classMaker('', [className], {})}>
         {categories.map(item => {
            if (item.name === category) {
               return (
                  <HStack key={item.name} gap='10'>
                     <AppIcon Svg={item.icon} width={16} height={16} />
                     <AppText Tag='span' size='s'>{item.name}</AppText>
                  </HStack>
               );
            }
         })}
      </div>
   );
});