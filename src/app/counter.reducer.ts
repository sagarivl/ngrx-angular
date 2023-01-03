import { createReducer, on } from '@ngrx/store';
import { increment, decrement, reset } from './counter.action';

export const initialState = {
  counter: 0,
};

export const counterReducer = createReducer(
  initialState,
  on(increment, (state: any) => {
    return {
      ...state,
      counter: state.counter + 1,
    };
  }),
  on(decrement, (state: any) => {
    return {
      ...state,
      counter: state.counter - 1,
    };
  }),
  on(reset, (state: any) => {
    return {
      ...state,
      counter: 0,
    };
  })
);

//create inital state in reducer

//create action in action.ts-->increment,decremetn
