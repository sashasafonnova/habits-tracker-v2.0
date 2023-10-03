import styles from './CreateForm.module.scss';
import { AppTitle, AppTitleColor, AppTitleVariant } from 'shared/ui/AppTitle/AppTitle';
import { AppButton, AppButtonVariant } from 'shared/ui/AppButton/AppButton';
import { useCallback, useState } from 'react';
import { categories, CategoryNames, TrackCategory } from 'entities/TrackCategory';
import { useSelector } from 'react-redux';
import { trackCategorySelector } from 'features/CreateTrack/model/selectors/trackCategorySelector/trackCategorySelector';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import { createTrackActions, createTrackReducer } from '../../model/slice/createTrackSlice';
import { useStateCreator } from 'shared/lib/hooks/useStateCreator';
import { Dropdown, DropdownVariant } from 'shared/ui/Dropdown/Dropdown';
import { Textarea, TextareaVariant } from 'shared/ui/TextArea/Textarea';
import { trackTitleSelector } from '../../model/selectors/trackTitleSelector/trackTitleSelector';
import { AppInput } from 'shared/ui/AppInput/AppInput';
import { trackLengthSelector } from '../../model/selectors/trackLengthSelector/trackLengthSelector';
import { CreateTrackData, CreateTrackStatuses, TrackLength } from '../../model/types/createTrack';
import { AppText, AppTextColors, AppTextSizes } from 'shared/ui/AppText/AppText';
import { dateCreator } from 'shared/lib/dateCreator/dateCreator';
import { fetchCreateTrack } from '../../model/services/fetchCreateTrack';
import { Modal } from 'shared/ui/Modal/Modal';
import { trackCreateStatusSelector } from '../../model/selectors/trackCreateStatusSelector/trackCreateStatusSelector';
import { Loader } from 'shared/ui/Loader/Loader';
import { createTrackErrorsSelector } from '../../model/selectors/createTrackErrorsSelector/createTrackErrorsSelector';
import { FetchLoader } from 'shared/ui/FetchLoader/FetchLoader';


export const CreateForm: React.FC = () => {

   useStateCreator({ createTrack: createTrackReducer }, true);

   const [dropdownOpen, setDropdownOpen] = useState<boolean>(false);
   const category = useSelector(trackCategorySelector);
   const title = useSelector(trackTitleSelector);
   const trackLength = useSelector(trackLengthSelector);
   const createStatus = useSelector(trackCreateStatusSelector);
   const errors = useSelector(createTrackErrorsSelector);


   const dispatch = useAppDispatch();

   const onChooseCategory = useCallback((value: CategoryNames) => {
      setDropdownOpen(false);
      dispatch(createTrackActions.setCategory(value));
   }, [setDropdownOpen]);


   const onChangeName = useCallback((value: string) => {
      dispatch(createTrackActions.setName(value));
   }, [dispatch]);


   const onChangeLength = useCallback((value: TrackLength) => {
      dispatch(createTrackActions.setLength(value));
   }, [dispatch]);


   const onToggleDropdown = useCallback(() => {
      setDropdownOpen(prev => !prev);
   }, [setDropdownOpen]);


   const onFocusField = useCallback((field: string) => {
      const errorField = field === 'category' ? { ...errors, category: '' } : { ...errors, title: '' };
      dispatch(createTrackActions.setValidateErrors(errorField));
   }, [errors]);


   // const onBlur = useCallback((field: Fields) => {
   //    const validateErrors = validateCreateTrack({ email: emailValue, password: passwordValue }, field);
   //    dispatch(loginActions.setValidateErrors({ ...errors, ...validateErrors }));
   // }, [errors, category, title]);


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
      <section className={styles.createForm}>
         <div className='container'>
            <AppTitle variant={AppTitleVariant.BIG} color={AppTitleColor.PRIMARY} marginBottom={'30'}>Новый трек</AppTitle>
            
            <form className={styles.form}>
               {errors?.others ? <AppText color={AppTextColors.ERROR}>{errors.others}</AppText> : ''}
               <div className={styles.fieldWrapper}>
                  {errors?.category && <AppText className={styles.errorText} color={AppTextColors.ERROR} textSize={AppTextSizes.XS}>{errors.category}</AppText>}
                  <div className={styles.category}>
                     <AppButton 
                        variant={AppButtonVariant.OUTLINE} 
                        onClick={onToggleDropdown} 
                        marginBottom={errors?.title ? '30' : '20'} 
                        onFocus={() => onFocusField('category')}>
                        {category ? <TrackCategory category={category} /> : 'Выбрать категорию'}
                     </AppButton>
                     {dropdownOpen && <Dropdown className={styles.dropdownList} list={categories} onChoose={onChooseCategory} variant={DropdownVariant.BACKGROUND} mods={{short: true }} />}
                  </div>
               </div >
               <div className={styles.fieldWrapper}>
                  {errors?.title && <AppText className={styles.errorText} color={AppTextColors.ERROR} textSize={AppTextSizes.XS}>{errors.title}</AppText>}
                  <Textarea rows={3} 
                     variant={TextareaVariant.OUTLINE} 
                     placeholder={'Что будем делать?'} 
                     value={title} 
                     onChange={onChangeName} 
                     marginBottom={'20'}
                     onFocus={() => onFocusField('title')}
                  />
               </div>
               <AppText textSize={AppTextSizes.M} marginBottom={'10'}>Количество дней:</AppText>
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
               <AppButton variant={AppButtonVariant.BACKGROUND} onClick={onClickCreate}>Создать</AppButton>
            </form>   
         </div>
         {createStatus === CreateTrackStatuses.IS_CREATING && <Modal><Loader /></Modal>}
      </section>
   );
};