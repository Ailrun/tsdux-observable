import { Observable } from 'rxjs';

import { action, payload } from 'tsdux';

import { toPayload } from '../toPayload';

test('`toPayload` should be safely callable without any parameters', () => {
  expect(() => {
    toPayload();
  }).not.toThrowError();
});

test('`toPayload` should return a function', () => {
  expect(typeof toPayload()).toBe('function');
});

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
