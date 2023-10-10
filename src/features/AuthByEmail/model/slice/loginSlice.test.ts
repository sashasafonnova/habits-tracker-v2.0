import { DeepPartial } from '@reduxjs/toolkit';
import { loginActions, loginReducer } from './loginSlice';
import { LoginSchema, LoginValidateErrors } from '../types/login';
import { ValidateEmailErrors, ValidateOtherErrors } from 'shared/types/validation';


describe('loginSlice.test', () => {
   test('setEmail', () => {
      const state: DeepPartial<LoginSchema> = {
         email: 'test@test.com',
         password: '',
         isLoading: false,
         validateErrors: {}
      };
      expect(loginReducer(state as LoginSchema, loginActions.setEmail('new@test.com'))).toEqual({
         email: 'new@test.com',
         password: '',
         isLoading: false,
         validateErrors: {}
      });
   });


   test('setPassword', () => {
      const state: DeepPartial<LoginSchema> = {
         email: '',
         password: '123',
         isLoading: false,
         validateErrors: {}
      };
      expect(loginReducer(state as LoginSchema, loginActions.setPassword('123123'))).toEqual({
         email: '',
         password: '123123',
         isLoading: false,
         validateErrors: {}
      });
   });


   test('setValidateErrors', () => {
      const state: DeepPartial<LoginSchema> = {
         email: '',
         password: '123',
         isLoading: false,
         validateErrors: {}
      };
      const validateErrors: LoginValidateErrors  = {
         email: ValidateEmailErrors.EMAIL_INCORRECT,
      };

      expect(loginReducer(state as LoginSchema, loginActions.setValidateErrors(validateErrors))).toEqual({
         email: '',
         password: '123',
         isLoading: false,
         validateErrors: {
            email: ValidateEmailErrors.EMAIL_INCORRECT,
         }
      });
   });


   test('setValidateErrors others', () => {
      const state: DeepPartial<LoginSchema> = {
         email: '',
         password: '123',
         isLoading: false,
         validateErrors: {
            others: ValidateOtherErrors.SERVER_ERROR
         }
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
         isLoading: false,
         validateErrors: {}
      };
      expect(loginReducer(state as LoginSchema, loginActions.clearForm())).toEqual({
         email: '',
         password: '',
         isLoading: false,
         validateErrors: {}
      });
   });
});