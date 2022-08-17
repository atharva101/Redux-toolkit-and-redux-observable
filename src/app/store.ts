import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import { applyMiddleware } from '@reduxjs/toolkit';
import{ epicMiddleware } from './epicMiddleware';
import {rootEpic} from './epicMiddleware'

export const store = configureStore({
  reducer: { 
    counter: counterReducer,
  },
  middleware: [epicMiddleware]
});

epicMiddleware.run(rootEpic)


export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;