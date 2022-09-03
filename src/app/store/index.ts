/***********************************************************************************
 * NOTE:
 * This file will contains all the States and Reducers
 *
 * State Syntax
 * export interface State {
 *    user: fromUser.State //OR
 *    [fromUser.userFeatureKey]: fromUser.State;
 * };
 *
 * Reduces Syntax
 * export const reducers: ActionReducerMap<State> = {
 *    user: fromUser.reducer //OR
 *    [fromUser.userFeatureKey]: fromUser.reducer,
 * };

 *************************************************************************************/

import { ActionReducerMap, MetaReducer } from '@ngrx/store';
import { environment } from 'src/environments/environment';

// Custome Reducers
import * as fromCounter from './reducers/counter.reducer';
import * as fromUser from './reducers/user.reducer';

export interface AppState {
  counterState: fromCounter.State; //counterState key will be visbile for this state in Redux Devtool
  userState: fromUser.State;
}

export const AppReducers: ActionReducerMap<AppState, any> = {
  counterState: fromCounter.reducer,
  userState: fromUser.reducer,
};
