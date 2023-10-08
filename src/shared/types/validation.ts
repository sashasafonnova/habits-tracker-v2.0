export interface FormData {
   email?: string,
   password?: string;
}

export enum ValidateEmailErrors {
   EMAIL_EMPTY = '* обязательное поле',
   EMAIL_INCORRECT = '* введите корректный e-mail',
}

export enum ValidatePasswordErrors {
   PASSWORD_EMPTY = '* обязательное поле',
   PASSWORD_INCORRECT = '* минимум 8 символов (1 буква и 1 цифра)',
}

export enum ValidateOtherErrors {
   SERVER_ERROR = 'Неверный логин или пароль'
}

export interface FormValidateErrors {
   email?: ValidateEmailErrors,
   password?: ValidatePasswordErrors,
}
