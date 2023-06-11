
import { configureStore } from '@reduxjs/toolkit';
import { ThunkExtraArg, StateSchema } from './StateSchema';
import { $api } from 'shared/api/api';
import { loginReducer } from 'features/AuthByEmail';
import { userReducer } from 'entities/User';
import { userTrackReducer } from 'entities/UserTrack';
import { trackProfileReducer } from 'entities/TrackProfile';
import { removeTrackReducer } from 'features/RemoveTrack';


export const createReduxStore = (initialState?: StateSchema) => {

   const args: ThunkExtraArg = {
      api: $api
   };

   const store = configureStore({
      reducer: {
         login: loginReducer,
         user: userReducer,
         userTrack: userTrackReducer,
         trackProfile: trackProfileReducer,
         removeTrack: removeTrackReducer,
      },
      devTools: __IS_DEV__,
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


