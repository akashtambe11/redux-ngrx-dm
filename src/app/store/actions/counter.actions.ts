import { createAction, props } from '@ngrx/store';
import { createActionName } from 'src/utils/util';

const ActionPrefix = 'Counter';

export const increment = createAction(
  createActionName(ActionPrefix, 'Increment')
);

export const decrement = createAction(
  createActionName(ActionPrefix, 'Decrement')
);

export const reset = createAction(createActionName(ActionPrefix, 'Reset'));
