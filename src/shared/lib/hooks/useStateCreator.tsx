import { Reducer } from '@reduxjs/toolkit';
import { ReduxStoreWithManager, StateSchemaKey } from 'app/providers/StoreProvider/config/StateSchema';
import { useEffect } from 'react';
import { useStore } from 'react-redux';
import { useAppDispatch } from './useAppDispatch';


export type ReducersList = {
   [name in StateSchemaKey]?: Reducer;
}


export const useStateCreator = (reducers: ReducersList, removeAfterUnmount?: boolean) => {

   const store = useStore() as ReduxStoreWithManager;
   const dispatch = useAppDispatch();


   useEffect(() => {
      Object.entries(reducers).forEach(([name, reducer]) => {
         store.reducerManager.add(name as StateSchemaKey, reducer);
         dispatch({ type: `@INIT ${name} reducer` });
      });

      return () => {
         if (removeAfterUnmount) {
            Object.entries(reducers).forEach(([name, reducer]) => {
               store.reducerManager.remove(name as StateSchemaKey);
               dispatch({ type: `@DESTROY ${name} reducer` });
            });
         }
      };
   }, []);
};