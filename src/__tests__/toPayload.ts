import { Observable } from 'rxjs';

import { action, payload } from 'tsdux';

import { toPayload } from '../toPayload';

test('`toPayload` should map payload action observable to payload observable', () => {
  expect.assertions(1);

  //tslint:disable-next-line: no-unsafe-any
  Observable.from([
    action('', payload<number>()).create(0),
    action('', payload<string>()).create('abc'),
  ])
    .let(toPayload())
    .toArray()
    .subscribe((result) => {
      expect(result).toEqual([0, 'abc']);
    });
});
