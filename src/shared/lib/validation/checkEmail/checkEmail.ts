import { ValidateEmailErrors } from 'shared/types/validation';

export const checkEmail = (email: string | undefined) => {
  let emailError: ValidateEmailErrors | undefined;

  const emailPattern = /^[-\w.]+@([A-z0-9][-A-z0-9]+\.)+[A-z]{2,4}$/;

  if (email === '') {
    emailError = ValidateEmailErrors.EMAIL_EMPTY;
  }

  if (email && !email.match(emailPattern)) {
    emailError = ValidateEmailErrors.EMAIL_INCORRECT;
  }

  return emailError;
};
