import { checkPassword } from './checkPassword';
import { ValidatePasswordErrors } from '../../../types/login';

describe('checkPassword', () => {
   test('empty string', () => {
      expect(checkPassword('')).toBe(ValidatePasswordErrors.PASSWORD_EMPTY);
   });

   test('with valid value', () => {
      expect(checkPassword('Abcdef123')).toEqual(undefined);
   });

   test('with only letters', () => {
      expect(checkPassword('Abc')).toEqual(ValidatePasswordErrors.PASSWORD_INCORRECT);
   });

   test('with only numbers', () => {
      expect(checkPassword('123')).toEqual(ValidatePasswordErrors.PASSWORD_INCORRECT);
   });
});