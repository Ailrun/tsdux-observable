import { Observable } from 'rxjs';

import { action, payload, props } from 'tsdux';

import { ofType } from '../ofType';

test('`ofType` should be safely callable with a single ActionCreator or an array of ActionCreators', () => {
  const MayAction = action('MAYBE?');
  const ShouldAction = action('YOUSHOULD!', payload<string>());

  expect(() => {
    ofType(MayAction);
  }).not.toThrowError();
  expect(() => {
    ofType([ShouldAction]);
  }).not.toThrowError();
  expect(() => {
    ofType([MayAction, ShouldAction]);
  }).not.toThrowError();
});

test('`ofType` should return a function', () => {
  const MyAction = action('MY!!!');

  expect(typeof ofType(MyAction)).toBe('function');
});

test('`ofType` should filter out actions in observable except matching ones', () => {
  //tslint:disable-next-line: no-magic-numbers
  expect.assertions(2);

  const TestAction = action('abcTEST');
  const OtherAction = action('OTHER', payload<string>());
  const OrTestAction = action('orAnother', props<{ test: number }>());

  //tslint:disable-next-line: no-unsafe-any
  Observable.from([
    TestAction.create(),
    OtherAction.create('abc'),
    TestAction.create(),
    OrTestAction.create({ test: 0 }),
    OtherAction.create('TTBE'),
  ])
    .let(ofType(OtherAction))
    .toArray()
    .subscribe((result) => {
      //tslint:disable-next-line: no-unsafe-any
      expect(result.every(({ type }) => type == OtherAction.type)).toBe(true);
      expect(result).toEqual([
        expect.objectContaining({ payload: 'abc' }),
        expect.objectContaining({ payload: 'TTBE' }),
      ]);
    });
});
