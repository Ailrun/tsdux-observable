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

- [toPayload](#topayload)

### toPayload ###

```typescript
function toPayload<PA extends PayloadAction<string, any>>(): (source: Observable<PA>) => Observable<PA['payload']>
```

Function for mapping Observable of `PayloadAction` to Observable of `payload` property.

``` typescript
Observable([
  action('abc', payload<string>()).create('d012d@!gWE'),
  action('ttt', payload<number>()).create(178),
])
  .let(toPayload())
  .toArray()
  .subscribe((result) => {
    console.log(result) // ['d012d@!gWE', 178]
  });
```

