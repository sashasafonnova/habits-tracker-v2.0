import { AxiosInstance } from 'axios';
import { UserSchema } from 'entities/User';
import { UserTrackSchema } from 'entities/UserTrack';
import { LoginSchema } from 'features/AuthByEmail';
import { TrackProfileSchema } from 'entities/TrackProfile';
import { RemoveTrackSchema } from 'features/RemoveTrack';
import { AnyAction, CombinedState, EnhancedStore, Reducer, ReducersMapObject } from '@reduxjs/toolkit';


export interface StateSchema {
   login?: LoginSchema,
   user: UserSchema,
   userTrack?: UserTrackSchema,
   trackProfile?: TrackProfileSchema,
   removeTrack?: RemoveTrackSchema
}

export type StateSchemaKey = keyof StateSchema;

export interface ThunkExtraArg {
   api: AxiosInstance
}

export interface ThunkConfig<T> {
   rejectValue: T;
   extra: ThunkExtraArg;
}

export interface ReducerManager {
   getReducerMap: () => ReducersMapObject<StateSchema>;
   reduce: (state: StateSchema, action: AnyAction) => CombinedState<StateSchema>;
   add: (key: StateSchemaKey, reducer: Reducer) => void;
   remove: (key: StateSchemaKey) => void;
}

export interface ReduxStoreWithManager extends EnhancedStore<StateSchema> {
   reducerManager: ReducerManager;
}
