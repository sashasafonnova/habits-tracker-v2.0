import { configureStore } from '@reduxjs/toolkit';
import { StateSchema } from './StateSchema';
import { loginReducer } from 'features/AuthByEmail';


export const createReduxStore = (initialState?: StateSchema) => {
   return configureStore<StateSchema>({
      reducer: {
         login: loginReducer
      },
      devTools: true,
      preloadedState: initialState
   });
};


