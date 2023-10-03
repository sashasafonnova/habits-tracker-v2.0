import { CreateTrackCategoryErrors, CreateTrackData, CreateTrackTitleErrors, ValidateCreateTrackErrors } from '../../types/createTrack';


export const validateCreateTrack = (data: CreateTrackData) => {
   const { category, title } = data;

   const errors: ValidateCreateTrackErrors = {};

   if (category === ''){
      errors.category = CreateTrackCategoryErrors.CATEGORY_EMPTY;
   }

   if (title === '') {
      errors.title = CreateTrackTitleErrors.TITLE_EMPTY;
   }

   if (title.split('').length > 20) {
      errors.title = CreateTrackTitleErrors.TITLE_INCORRECT_LENGTH;
   }

   return errors;
};