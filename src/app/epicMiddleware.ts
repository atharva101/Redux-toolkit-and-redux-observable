import { combineEpics, createEpicMiddleware } from 'redux-observable';
import { decrementCounter, incrementCounter } from '../features/counter/counterSlice';
import { increment, decrement } from '../features/counter/counterSlice';
import {filter, delay, mapTo,tap,map} from 'rxjs/operators';
import { useAppDispatch,useAppSelector } from '../app/hooks'
import { taskCompleted } from '@reduxjs/toolkit/dist/listenerMiddleware/exceptions';


export const epicMiddleware = createEpicMiddleware();


const decrementEpic = (action$: any) => { 

    return action$.pipe( // subscribe to actions observable
    filter(action => action.type === 'decrement'),
    map(()=> decrementCounter())
    )
}

const incrementEpic = (action$: any) => { 

    return action$.pipe( // subscribe to actions observable
    filter(action => action.type === 'increment'),
    map(()=> incrementCounter())
    )
}

export const rootEpic = combineEpics(
    incrementEpic,
    decrementEpic
);


