import { AxiosInstance } from 'axios';
import { UserSchema } from 'entities/User';
import { LoginSchema } from 'features/AuthByEmail';
import { TrackProfileSchema } from 'entities/TrackProfile';
import { RemoveTrackSchema } from 'features/RemoveTrack';
import { AnyAction, CombinedState, EnhancedStore, Reducer, ReducersMapObject } from '@reduxjs/toolkit';
import { CreateTrackSchema } from 'features/CreateTrack';
import { TracksListSchema } from 'widgets/TracksList';


export interface StateSchema {
   login?: LoginSchema,
   user: UserSchema,
   tracksList?: TracksListSchema,
   trackProfile?: TrackProfileSchema,
   removeTrack?: RemoveTrackSchema,
   createTrack?: CreateTrackSchema,
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
