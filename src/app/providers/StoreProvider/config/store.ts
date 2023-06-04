
import { configureStore } from '@reduxjs/toolkit';
import { ThunkExtraArg, StateSchema } from './StateSchema';
import { loginReducer } from 'features/AuthByEmail';
import { userReducer } from 'entities/User';
import { userTrackReducer } from 'entities/UserTrack';
import { $api } from 'shared/api/api';
import { trackListReducer } from 'widgets/TrackList';


export const createReduxStore = (initialState?: StateSchema) => {

   const args: ThunkExtraArg = {
      api: $api
   };

   const store = configureStore({
      reducer: {
         login: loginReducer,
         user: userReducer,
         userTrack: userTrackReducer,
         fetchTracks: trackListReducer
      },
      devTools: true,
      preloadedState: initialState,
      middleware: (getDefaultMiddleware) => getDefaultMiddleware({
         thunk: {
            extraArgument: args
         },
      })
   });

   return store;
};


export type AppDispatch = ReturnType<typeof createReduxStore>['dispatch'];


