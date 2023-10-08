import { DeepPartial } from '@reduxjs/toolkit';
import { loginActions, loginReducer } from './loginSlice';
import { LoginSchema } from '../types/login';
import { ValidateEmailErrors, ValidateOtherErrors } from 'shared/types/validation';


describe('loginSlice.test', () => {
   test('setEmail', () => {
      const state: DeepPartial<LoginSchema> = {
         email: 'test@test.com',
         password: '',
         isLoading: false
      };
      expect(loginReducer(state as LoginSchema, loginActions.setEmail('new@test.com'))).toEqual({
         email: 'new@test.com',
         password: '',
         isLoading: false
      });
   });


   test('setPassword', () => {
      const state: DeepPartial<LoginSchema> = {
         email: '',
         password: '123',
         isLoading: false
      };
      expect(loginReducer(state as LoginSchema, loginActions.setPassword('123123'))).toEqual({
         email: '',
         password: '123123',
         isLoading: false
      });
   });


   test('setValidateErrors', () => {
      const state: DeepPartial<LoginSchema> = {
         email: '',
         password: '123',
         isLoading: false
      };
      const validateErrors = {
         email: ValidateEmailErrors.EMAIL_INCORRECT,
         password: ValidateEmailErrors,
      };
      expect(loginReducer(state as LoginSchema, loginActions.setValidateErrors(validateErrors))).toEqual({
         email: '',
         password: '123',
         isLoading: false,
         validateErrors: {
            email: ValidateEmailErrors.EMAIL_INCORRECT,
            password: ValidateEmailErrors,
         }
      });
   });


   test('setValidateErrors others', () => {
      const state: DeepPartial<LoginSchema> = {
         email: '',
         password: '123',
         isLoading: false
      };
      const validateErrors = {
         others: ValidateOtherErrors.SERVER_ERROR
      };
      expect(loginReducer(state as LoginSchema, loginActions.setValidateErrors(validateErrors))).toEqual({
         email: '',
         password: '123',
         isLoading: false,
         validateErrors: {
            others: ValidateOtherErrors.SERVER_ERROR
         }
      });
   });


   test('clearForm', () => {
      const state: DeepPartial<LoginSchema> = {
         email: 'test@test.com',
         password: '123',
         isLoading: false
      };
      expect(loginReducer(state as LoginSchema, loginActions.clearForm())).toEqual({
         email: '',
         password: '',
         isLoading: false
      });
   });
});