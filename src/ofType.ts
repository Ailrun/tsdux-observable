import {
  AnyAction,
} from 'redux';

import {
  OperatorFunction,
} from 'rxjs';
import {
  filter,
} from 'rxjs/operators';

import {
  isType,
} from 'tsdux';
import {
  ActionCreator,
} from 'tsdux/action';

export function ofType<AC extends ActionCreator<string, any>>(
  actionCreators: AC | Array<AC>,
): OperatorFunction<AnyAction, AC['action']> {
  return filter((action: AnyAction): action is AC['action'] => isType(action, actionCreators));
}
