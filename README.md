<h3 align="center">
  React Scroll Into View If Needed
</h3>

## Description

Just a thin component wrapper around the fantastic [scroll-into-view-if-needed](https://www.npmjs.com/package/scroll-into-view-if-needed) polyfill.

## Install

`yarn add react-scroll-into-view-if-needed`

or

`npm install react-scroll-into-view-if-needed --save`

## Example

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

## Props

#### active
> Default: `true`

The `active` prop allows controll of _when_ to scroll to the component. By default, it will attempt to scroll as soon as it is mounted, but you can set this prop to manually control when to trigger the scroll behavior.

#### elementType
> Default: `'div'`

Set the wrapper component type. See the React [createElement](https://reactjs.org/docs/react-api.html#createelement) api

#### options
> Default: `{ duration: 250, easing: 'easeOut' }`

The `options` prop simply passes options to `scroll-into-view-if-needed`. See all the possible options in their [API documentation](https://www.npmjs.com/package/scroll-into-view-if-needed#api)
