import { createSlice, PayloadAction, createAction} from '@reduxjs/toolkit'


interface CounterSliceState {
    value: any  ;
}

const initialState: CounterSliceState = {
    value: 0,
};


export const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
      //doubt state type
        incrementCounter(state: any){
            state.value++;
        },
        decrementCounter(state:any){
            state.value--
        }
    }
  });


  export const increment = createAction('increment')
  export const decrement = createAction('decrement')
  export const {decrementCounter} = counterSlice.actions;
  export const {incrementCounter} = counterSlice.actions;
  //yaha se action banega or fir ref

  export default counterSlice.reducer;
  