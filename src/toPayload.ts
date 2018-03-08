import {
  OperatorFunction,
} from 'rxjs/interfaces';
import {
  map,
} from 'rxjs/operators/map';

import {
  PayloadAction,
} from 'tsdux/action';

export function toPayload<PA extends PayloadAction<string, any>>(): OperatorFunction<PA, PA['payload']> {
  return map((action) => action.payload as PA['payload']);
}
