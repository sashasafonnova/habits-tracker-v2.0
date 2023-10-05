import styles from './TrackCategory.module.scss';
import { categories } from '../consts/categories';
import { memo } from 'react';
import { classMaker } from 'shared/lib/classMaker/classMaker';
import { AppIcon } from 'shared/ui/AppIcon/AppIcon';
import { HStack } from 'shared/ui/AppStack';


interface TrackCategoriesProps {
   className?: string;
   category: string;
}


export const TrackCategory: React.FC<TrackCategoriesProps> = memo(function TrackCategory(props: TrackCategoriesProps){
   const { className = '', category } = props;

   return (
      <div className={classMaker(styles.trackCategory, [className], {})}>
         {categories.map(item => {
            if (item.name === category) {
               return (
                  <HStack className={styles.category} key={item.name} gap='10'>
                     <AppIcon Svg={item.icon} width={16} height={16} />
                     <span className={styles.categoryName}>{item.name}</span>
                  </HStack>
               );
            }
         })}
      </div>
   );
});