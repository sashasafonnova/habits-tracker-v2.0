import styles from './TrackCategory.module.scss';
import { categories } from '../consts/categories';
import { memo } from 'react';
import { classMaker } from 'shared/lib/classMaker/classMaker';


interface TrackCategoriesProps {
   category: string;
   marginBottom?: string;
}


export const TrackCategory: React.FC<TrackCategoriesProps> = memo(function TrackCategory(props: TrackCategoriesProps){
   const { category, marginBottom } = props;

   const additional = [
      `marginBottom${marginBottom}`
   ];

   return (
      <div className={classMaker(styles.trackCategory, additional, {})}>
         {categories.map(item => {
            if (item.name === category) {
               return (
                  <div className={styles.category} key={item.name}>
                     {<item.icon className={styles.categoryIcon} />}
                     <span className={styles.categoryName}>{item.name}</span>
                  </div>
               );
            }
         })}
      </div>
   );
});