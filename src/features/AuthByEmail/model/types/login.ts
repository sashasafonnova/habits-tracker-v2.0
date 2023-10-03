export interface LoginSchema {
   email: string,
   password: string,
   isLoading: boolean,
   validateErrors?: LoginValidateErrors | null
}

export interface LoginValidateErrors {
   email?: ValidateEmailErrors | '',
   password?: ValidatePasswordErrors | '',
   others?: ValidateOtherErrors | ''
}

export interface LoginData {
   email?: string,
   password?: string
}

export enum ValidateEmailErrors {
   EMAIL_EMPTY = '* обязательное поле',
   EMAIL_INCORRECT = '* введите корректный e-mail',
}

export enum ValidatePasswordErrors {
   PASSWORD_EMPTY = '* обязательное поле',
   PASSWORD_INCORRECT = '* пароль минимум 8 символов (1 буква и 1 цифра)',
}

export enum ValidateOtherErrors {
   SERVER_ERROR = 'Неверный логин или пароль'
}