import { configureStore } from '@reduxjs/toolkit';
import { StateSchema } from './StateSchema';
import { loginReducer } from 'features/AuthByEmail';
import { userReducer } from 'entities/User';
import { userTrackReducer } from 'entities/UserTrack';


export const createReduxStore = (initialState?: StateSchema) => {
   const store =  configureStore<StateSchema>({
      reducer: {
         login: loginReducer,
         user: userReducer,
         userTrack: userTrackReducer,
      },
      devTools: true,
      preloadedState: initialState
   });

   return store;
};


export type AppDispatch = ReturnType<typeof createReduxStore>['dispatch'];


