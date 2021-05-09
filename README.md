<div align="center">
  <h1>@chronocide/dot-obj</h1>
  <p>Get or set (nested) object properties using doth paths.</p>
</div>

<div align="center">
  <a href="/LICENSE">
    <img alt="License MIT" src="https://img.shields.io/badge/license-MIT-blue.svg" />
  </a>
  <a href="https://www.npmjs.com/package/@chronocide/dot-obj">
    <img alt="NPM" src="https://img.shields.io/npm/v/@chronocide/dot-obj?label=npm">
  </a>
  <a href="https://bundlephobia.com/result?p=@chronocide/dot-obj@latest">
    <img alt="Bundle size" src="https://img.shields.io/bundlephobia/minzip/@chronocide/dot-obj@latest.svg">
  </a>
  <a href="https://github.com/chronoDave/dot-obj/actions/workflows/ci.yml">
    <img alt="CI" src="https://github.com/chronoDave/dot-obj/actions/workflows/ci.yml/badge.svg" />
  </a>
  <a href="https://github.com/chronoDave/dot-obj/actions/workflows/codeql.yml">
    <img alt="CodeQL" src="https://github.com/chronoDave/dot-obj/actions/workflows/codeql.yml/badge.svg?branch=master">
  </a>
</div>

## Install

```
$ npm i dot-obj
```

_Note: This package requires Node >=10.12.0_

## Usage

```JS
import dot from 'dot-obj';

// Get
dot.get({ foo: { bar: true } }, 'foo.bar') // => true
dot.get({ foo: { bar: true } }, 'foo.bar.baz') // => undefined
dot.get({ foo: { bar: true } }, 'bar') // => undefined
dot.get({ foo: [{ bar: true }, { baz: false }] }, 'foo.0') // => { bar: true }

// Set
dot.set({ foo: { bar: true } }, 'foo', { baz: false }) // => { foo: { baz: false } }
dot.set({ foo: { bar: true } }, 'foo.bar', { baz: false }) // => { foo: { bar: { baz: false } } }
dot.set({ foo: { bar: true } }, 'baz', false) // => { foo: { bar: true }, baz: false }
```

## Donating

[![ko-fi](https://www.ko-fi.com/img/githubbutton_sm.svg)](https://ko-fi.com/Y8Y41E23T)
