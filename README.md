# tsdux-observable #

[![npm latest version](https://img.shields.io/npm/v/tsdux-observable/latest.svg)](https://www.npmjs.com/package/tsdux-observable)
[![npm total download](https://img.shields.io/npm/dt/tsdux-observable.svg)](https://www.npmjs.com/package/tsdux-observable)
[![github license](https://img.shields.io/github/license/Ailrun/tsdux-observable.svg)](https://github.com/Ailrun/tsdux-observable/blob/master/LICENSE)
[![github latest tag](https://img.shields.io/github/tag/Ailrun/tsdux-observable.svg)](https://github.com/Ailrun/tsdux-observable/tags)
[![github commit from latest](https://img.shields.io/github/commits-since/Ailrun/tsdux-observable/latest.svg)](https://github.com/Ailrun/tsdux-observable)
[![travis status](https://travis-ci.org/Ailrun/tsdux-observable.svg?branch=master)](https://travis-ci.org/Ailrun/tsdux-observable)
[![codecov coverage](https://img.shields.io/codecov/c/github/ailrun/tsdux-observable.svg)](https://codecov.io/gh/Ailrun/tsdux-observable)

TSdux utilities for Observables.

## Table of Contents ##

- [How To Install](#how-to-install)

## How To Install ##

```
npm install --save redux rxjs tsdux tsdux-observable
```

## API ##

### forType ###

```typescript
function forType<AC extends ActionCreator<string, any>, R>(actionCreators: AC | Array<AC>, map: (action: AC['action']) => R): Observable<R>
```

### ofType ###

```typescript
function ofType<AC extends ActionCreator<string, any>>(actionCreators: AC | Array<AC>): Observable<AnyAction> => Observable<AC['action']>
```

### toPayload ###

```typescript
function toPayload<PA extends PayloadAction<any>>(payloadAction$: Observable<PA>): Observable<PA['payload']>;
```
