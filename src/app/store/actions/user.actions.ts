import { createAction, props } from '@ngrx/store';
import { createActionName } from 'src/utils/util';

const ActionPrefix = 'User';

export const loadUsers = createAction(
  createActionName(ActionPrefix, 'Load Users')
);

export const loadUsersSuccess = createAction(
  createActionName(ActionPrefix, 'Load Users Success'),
  props<{ data: any }>()
);

export const loadUsersFailure = createAction(
  createActionName(ActionPrefix, 'Load Users Failure'),
  props<{ error: any }>()
);
