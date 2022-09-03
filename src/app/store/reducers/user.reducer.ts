import { Action, createReducer, on } from '@ngrx/store';
import { User } from 'src/app/model/models';
import * as UserActions from '../actions/user.actions';

export interface State {
  user: User[];
  error: string;
}

export const initialState: State = {
  user: [],
  error: '',
};

export const userReducer = createReducer(
  initialState,
  on(UserActions.loadUsers, (state) => {
    return {
      ...state,
    };
  }),

  on(UserActions.loadUsersSuccess, (state, { data }) => {
    return {
      ...state,
      users: data,
      error: '',
    };
  }),

  on(UserActions.loadUsersFailure, (state, { error }) => {
    return {
      ...state,
      users: [],
      error: error,
    };
  })
);

export function reducer(state: State | undefined, action: Action) {
  return userReducer(state, action);
}
