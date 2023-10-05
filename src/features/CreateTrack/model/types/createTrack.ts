import { CategoryNamesType } from 'entities/TrackCategory';

export interface CreateTrackSchema {
   category: CategoryNamesType | '',
   title: string | '',
   trackLength: TrackLength,
   createStatus: CreateTrackStatuses,
   validateErrors?: ValidateCreateTrackErrors | null;
}

export interface ValidateCreateTrackErrors {
   category?: CreateTrackCategoryErrors | '',
   title?: CreateTrackTitleErrors | '',
   others?: CreateTrackOtherErrors | ''
}

export enum CreateTrackStatuses {
   AWAIT = 'await',
   IS_CREATING = 'isCreating',
   CREATED = 'created',
   REJECTED = 'rejected'
}

export interface CreateTrackData {
   category: CategoryNamesType | '',
   title: string,
   habitLength: number,
   dateCreated: string,
   lastUpdated: string
}


export type TrackLength = '10' | '20' | '30' | '60';

export enum CreateTrackCategoryErrors {
   CATEGORY_EMPTY = '* обязательное поле',
}

export enum CreateTrackTitleErrors {
   TITLE_EMPTY = '* обязательное поле',
   TITLE_INCORRECT_LENGTH = '* максимальная длина 200 символов',
}

export enum CreateTrackOtherErrors {
   SERVER_ERROR = 'Неверный логин или пароль'
}