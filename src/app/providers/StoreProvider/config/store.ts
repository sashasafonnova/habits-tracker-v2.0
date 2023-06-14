
import { ReducersMapObject, configureStore } from '@reduxjs/toolkit';
import { ThunkExtraArg, StateSchema } from './StateSchema';
import { $api } from 'shared/api/api';
import { userReducer } from 'entities/User';

import { createReducerManager } from './reducerManager';


export const createReduxStore = (initialState?: StateSchema, asyncReducers?: ReducersMapObject<StateSchema>) => {

   const rootReducers = {
      ...asyncReducers,
      user: userReducer,
   };

   const reducerManager = createReducerManager(rootReducers);

   const args: ThunkExtraArg = {
      api: $api
   };


   const store = configureStore({
      reducer: reducerManager.reduce,
      devTools: __IS_DEV__,
      preloadedState: initialState,
      middleware: (getDefaultMiddleware) => getDefaultMiddleware({
         thunk: {
            extraArgument: args
         },
      })
   });

   // @ts-ignore
   store.reducerManager = reducerManager;

   return store;
};




export type AppDispatch = ReturnType<typeof createReduxStore>['dispatch'];


