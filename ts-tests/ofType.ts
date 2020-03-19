import { AnyAction } from 'redux';
import { Observable, from } from 'rxjs';

import { action, payload, props } from 'tsdux';

import { ofType } from '../src/ofType';

//START: Constants for tests
const Action0 = action('Action0');
const Action1 = action('Action1', props<{ x: number, y: number }>());
const Action2 = action('Action2', payload<{}>());
const Action3 = action('Action3', payload<number>());
const Action4 = action('Action4', props<{}>());
const Action5 = action('Action5', payload<string>());
const Action6 = action('Action6');

const actionObservable = from([
  Action0.create(),
  Action1.create({ x: 4, y: 5 }),
  Action5.create('123'),
  Action0.create(),
  Action3.create(4),
  Action2.create({}),
  Action3.create(2),
  Action6.create(),
]) as Observable<AnyAction>;

const payloadActionObservable = from([
  Action2.create({}),
  Action3.create(5),
  Action5.create('abc'),
  Action3.create(2),
]) as Observable<AnyAction>;

const numberObservable = from([0, 1, 0]) as Observable<number>;
const booleanObservable = from([true, true, false, true]) as Observable<boolean>;

const action0Observable = actionObservable.pipe(ofType(Action0));
const action23Observable = payloadActionObservable.pipe(ofType([Action2, Action3]));
//END: Constants for tests



//START: Tests
//FAIL: There is no first argument for `ofType`.
ofType();

//FAIL: There are more than one arguments for `ofType`.
ofType([], 1);
ofType([], 'abc');
ofType([], []);
ofType(Action0, Action1);
ofType([Action0], Action1);

//FAIL: First argument of `ofType` is not an `ActionCreator` nor an array of `ActionCreator`s
ofType(5);
ofType(true);
ofType({});
ofType('abc');

//FAIL: Use observable that is not an observable of `AnyAction`.
numberObservable.pipe(ofType(Action0));
numberObservable.pipe(ofType([]));
booleanObservable.pipe(ofType([Action1]));
booleanObservable.pipe(ofType(Action2));

//FAIL: Pass `ofType` itself instead of result of it.
actionObservable.pipe(ofType);
action0Observable.pipe(ofType);
payloadActionObservable.pipe(ofType);
//END: Tests
