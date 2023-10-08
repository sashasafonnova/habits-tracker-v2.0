export interface FormData {
   firstName?: string;
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
   SERVER_ERROR = 'Неверный логин или пароль',
   REGISTRATION_ERROR = 'Не удалось зарегистрироваться'
}

export enum ValidateNamesErrors {
   NAME_EMPTY = '* обязательное поле',
   NAME_INCORRECT = '* введите корректные данные',
}

export interface FormValidateErrors {
   firstName?: ValidateNamesErrors;
   email?: ValidateEmailErrors,
   password?: ValidatePasswordErrors,
}
