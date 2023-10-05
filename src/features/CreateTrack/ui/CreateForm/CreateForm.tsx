import styles from './CreateForm.module.scss';
import { AppButton } from 'shared/ui/AppButton/AppButton';
import { useCallback } from 'react';
import { TrackCategory } from 'entities/TrackCategory';
import { useSelector } from 'react-redux';
import { trackCategorySelector } from 'features/CreateTrack/model/selectors/trackCategorySelector/trackCategorySelector';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import { createTrackActions, createTrackReducer } from '../../model/slice/createTrackSlice';
import { useStateCreator } from 'shared/lib/hooks/useStateCreator';
import { AppDropdown } from 'shared/ui/AppDropdown/AppDropdown';
import { Textarea, TextareaVariant } from 'shared/ui/TextArea/Textarea';
import { trackTitleSelector } from '../../model/selectors/trackTitleSelector/trackTitleSelector';
import { AppInput } from 'shared/ui/AppInput/AppInput';
import { trackLengthSelector } from '../../model/selectors/trackLengthSelector/trackLengthSelector';
import { CreateTrackData, CreateTrackStatuses, TrackLength } from '../../model/types/createTrack';
import { dateCreator } from 'shared/lib/dateCreator/dateCreator';
import { fetchCreateTrack } from '../../model/services/fetchCreateTrack';
import { Modal } from 'shared/ui/Modal/Modal';
import { trackCreateStatusSelector } from '../../model/selectors/trackCreateStatusSelector/trackCreateStatusSelector';
import { Loader } from 'shared/ui/Loader/Loader';
import { createTrackErrorsSelector } from '../../model/selectors/createTrackErrorsSelector/createTrackErrorsSelector';
import { FetchLoader } from 'shared/ui/FetchLoader/FetchLoader';
import { VStack } from 'shared/ui/AppStack';
import { CategoriesList } from '../CategotiesList/CategoriesList';
import { AppText } from 'shared/ui/AppText/AppText';

export const CreateForm: React.FC = () => {

   useStateCreator({ createTrack: createTrackReducer }, true);

   const category = useSelector(trackCategorySelector);
   const title = useSelector(trackTitleSelector);
   const trackLength = useSelector(trackLengthSelector);
   const createStatus = useSelector(trackCreateStatusSelector);
   const errors = useSelector(createTrackErrorsSelector);

   const dispatch = useAppDispatch();

   const onChangeName = useCallback((value: string) => {
      dispatch(createTrackActions.setName(value));
   }, [dispatch]);

   const onChangeLength = useCallback((value: TrackLength) => {
      dispatch(createTrackActions.setLength(value));
   }, [dispatch]);

   const onFocusField = useCallback((field: string) => {
      const errorField = field === 'category' ? { ...errors, category: '' } : { ...errors, title: '' };
      dispatch(createTrackActions.setValidateErrors(errorField));
   }, [errors]);

   const onClickCreate = useCallback(() => {
      const dateCreated = dateCreator().slice(0, -3);
      const trackData: CreateTrackData = {
         category,
         title,
         habitLength: Number(trackLength),
         dateCreated,
         lastUpdated: dateCreated
      };
      dispatch(fetchCreateTrack(trackData));
   }, [category, title, trackLength]);


   if (createStatus === CreateTrackStatuses.CREATED){
      return (
         <FetchLoader title={'Трек успешно создан'} action={'К моим трекам'} link={'/tracks'} />
      );
   }

   if (errors?.others){
      return (
         <FetchLoader title={'Не удалось создать трек'} action={'К моим трекам'} link={'/tracks'} />
      );
   }

   return (
      <VStack max gap='30'>
         <AppText size='l' color='primary'>Новый трек</AppText>
         <form className={styles.form}>
            <VStack max gap='20'>
               {errors?.others ? <AppText color='error'>{errors.others}</AppText> : ''}
               <VStack className={styles.fieldWrapper} max>
                  {errors?.category && <AppText className={styles.errorText} color='error' size='xs'>{errors.category}</AppText>}
                  <AppDropdown 
                     focus
                     max
                     button={category ? <TrackCategory category={category}/> : 'Выберите категорию'} 
                     short 
                     buttonProps={{variant: 'outline', max: true, round: false, className: styles.dropdownButton}}>
                     <CategoriesList />
                  </AppDropdown>  
               </VStack >
               <VStack className={styles.fieldWrapper} max>
                  {errors?.title && <AppText className={styles.errorText} color='error' size='xs'>{errors.title}</AppText>}
                  <Textarea rows={3} 
                     variant={TextareaVariant.OUTLINE} 
                     placeholder={'Что будем делать?'} 
                     value={title} 
                     onChange={onChangeName} 
                     onFocus={() => onFocusField('title')}
                  />
               </VStack>
               <VStack gap='10'>
                  <AppText>Количество дней:</AppText>
                  <ul className={styles.trackLength}>
                     <li className={styles.lengthItem}>
                        <label className={styles.label}>
                           <AppInput 
                              checked={trackLength === '10' ? true : false} 
                              type={'radio'} value={'10'} 
                              inputSize={'small'} 
                              name='trackLength'
                              onChange={onChangeLength}/>
                        10
                        </label>
                     </li>
                     <li className={styles.lengthItem}>
                        <label className={styles.label}>
                           <AppInput 
                              checked={trackLength === '20' ? true : false} 
                              type={'radio'} value={'20'} 
                              inputSize={'small'} 
                              name='trackLength' 
                              onChange={onChangeLength} />
                        20
                        </label>
                     </li>
                     <li className={styles.lengthItem}>
                        <label className={styles.label}>
                           <AppInput 
                              checked={trackLength === '30' ? true : false} 
                              type={'radio'} value={'30'} 
                              inputSize={'small'} 
                              name='trackLength' 
                              onChange={onChangeLength} />   
                        30
                        </label>
                     </li>
                     <li className={styles.lengthItem}>
                        <label className={styles.label}>
                           <AppInput 
                              checked={trackLength === '60' ? true : false} 
                              type={'radio'} 
                              value={'60'} 
                              inputSize={'small'} 
                              name='trackLength' 
                              onChange={onChangeLength} />
                        60
                        </label>
                     </li>                  
                  </ul>
               </VStack>
               <AppButton variant='background' onClick={onClickCreate}>Создать</AppButton>
            </VStack>
         </form>   
         {createStatus === CreateTrackStatuses.IS_CREATING && <Modal><Loader /></Modal>}
      </VStack>
   );
};