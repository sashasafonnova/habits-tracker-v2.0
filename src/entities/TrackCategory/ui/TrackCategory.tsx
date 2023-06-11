import styles from './TrackCategory.module.scss';
import { categories } from '../consts/categories';
import { memo } from 'react';


interface TrackCategoriesProps {
   category: string;
}


export const TrackCategory: React.FC<TrackCategoriesProps> = memo(function TrackCategory(props: TrackCategoriesProps){
   const { category } = props;

   return (
      <div>
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