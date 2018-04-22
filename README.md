[![Build Status](https://travis-ci.org/icd2k3/react-scroll-into-view-if-needed.svg?branch=master)](https://travis-ci.org/icd2k3/react-scroll-into-view-if-needed)
[![Coverage Status](https://coveralls.io/repos/github/icd2k3/react-scroll-into-view-if-needed/badge.svg)](https://coveralls.io/github/icd2k3/react-scroll-into-view-if-needed)
[![dependencies Status](https://david-dm.org/icd2k3/react-scroll-into-view-if-needed/status.svg)](https://david-dm.org/icd2k3/react-scroll-into-view-if-needed)

## Description

A thin react component wrapper bundled with the fantastic [scroll-into-view-if-needed](https://www.npmjs.com/package/scroll-into-view-if-needed) [ponyfill](https://ponyfill.com).

## Install

`yarn add react-scroll-into-view-if-needed`

or

`npm install react-scroll-into-view-if-needed --save`

## Usage

```js
import ScrollIntoViewIfNeeded from 'react-scroll-into-view-if-needed';

const MyComponent = () => (
  <div style={{ paddingTop: 2000 }}>
    <ScrollIntoViewIfNeeded>
      <div>Hello</div>
    </ScrollIntoViewIfNeeded>
  </div>
);
```

## Optional Props

#### active
> Type: `boolean`
> Default: `true`

The `active` prop allows controll of _when_ to scroll to the component. By default, it will attempt to scroll as soon as it is mounted, but you can set this prop to manually control when to trigger the scroll behavior from the parent component.

#### elementType
> Type: `string`
> Default: `'div'`

Set the wrapper component type. For example, this could also be `'footer'`, `'button'`, etc...  See the React [createElement](https://reactjs.org/docs/react-api.html#createelement) api.

#### options
> Type: `object`
> Default: `{ duration: 250, easing: 'easeOut' }`

The `options` prop simply passes options to `scroll-into-view-if-needed`. See all the possible options in their [API documentation](https://www.npmjs.com/package/scroll-into-view-if-needed#api).
