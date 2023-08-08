import { createReducer, on } from '@ngrx/store';
import { storeApprover } from '../actions/action';

export const initialState = 0;

export const approverReducer = createReducer(
  initialState,
  on(storeApprover, (state) => state)
);
