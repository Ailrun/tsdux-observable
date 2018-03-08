import { Observable } from 'rxjs';

import { action, payload, props } from 'tsdux';

import { toPayload } from '../src/toPayload';

//START: Constants for tests
const actionObservable = Observable.from([
  action('abc').create(),
  action('qefe', props<{ x: number, y: number }>()).create({ x: 4, y: 5 }),
  action('frr', payload<string>()).create('123'),
]);

const payloadActionObservable = Observable.from([
  action('FWEW', payload<string>()).create('123'),
  action('QQQQE', payload<{ value: string }>()).create({ value: 'f@!##FW' }),
  action('THISIS', payload<boolean[]>()).create([true, true]),
]);

const payloadObservable = payloadActionObservable.let(toPayload());
//END: Constants for tests



//START: Tests
//FAIL: sThere are more than zero arguments to `toPayload`.
toPayload(1);
toPayload(true);
toPayload(payloadActionObservable);
toPayload(payloadActionObservable, payloadActionObservable);

//FAIL: Use observable contains non-payload actions.
actionObservable.let(toPayload());
actionObservable.pipe(toPayload());

//FAIL: Pass `toPayload` itself to operators instead of result of it.
payloadActionObservable.let(toPayload);
payloadActionObservable.pipe(toPayload);
//END: Tests
