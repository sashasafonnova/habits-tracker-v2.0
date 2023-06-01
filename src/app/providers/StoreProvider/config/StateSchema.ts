import { AnyAction, CombinedState, EnhancedStore, Reducer, ReducersMapObject } from '@reduxjs/toolkit';
import { UserSchema } from 'entities/User';
import { LoginSchema } from 'features/AuthByEmail';


export interface StateSchema {
   login: LoginSchema,
   user: UserSchema,
}
