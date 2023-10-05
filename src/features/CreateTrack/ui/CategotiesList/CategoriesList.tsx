import { categories } from 'entities/TrackCategory';
import styles from './CategoriesList.module.scss';
import { AppButton } from 'shared/ui/AppButton/AppButton';
import { HStack } from 'shared/ui/AppStack';
import { AppIcon } from 'shared/ui/AppIcon/AppIcon';
import { classMaker } from 'shared/lib/classMaker/classMaker';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import { createTrackActions } from '../../model/slice/createTrackSlice';
import { useCallback } from 'react';
import { CategoryNamesType } from 'entities/TrackCategory';
import { useSelector } from 'react-redux';
import { trackCategorySelector } from '../../model/selectors/trackCategorySelector/trackCategorySelector';
import { AppText } from 'shared/ui/AppText/AppText';

interface CategoriesListProps {
   className?: string;
}

export const CategoriesList: React.FC<CategoriesListProps> = (props: CategoriesListProps) => {
   const { className = ''} = props;
   const category = useSelector(trackCategorySelector);
   const dispatch = useAppDispatch();

   const onChangeCategory = useCallback((value: CategoryNamesType) => {
      dispatch(createTrackActions.setCategory(value));
   }, []);

   return (
      <ul className={classMaker(styles.appList, [className], {})}>
         {categories.map((item) => (
            <li key={item.name} className={styles.listItem}>
               <AppButton value={item.name} onClick={onChangeCategory} max className={styles.button} disabled={item.name === category}>
                  <HStack key={item.name} gap='10'>
                     <AppIcon Svg={item.icon} width={16} height={16} />
                     <AppText Tag='span'>{item.name}</AppText>
                  </HStack>
               </AppButton>
            </li>
         ))}
      </ul>
   );
};