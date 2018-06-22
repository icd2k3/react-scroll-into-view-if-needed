import React from 'react';
import { shallow } from 'enzyme';
import ScrollIntoViewIfNeeded from '..';
import mockScroll from '../../__mocks__/scroll-into-view-if-needed';

const MockChild = () => (
  <div>
    Yo
  </div>
);

test('Render with no props', () => {
  const wrapper = shallow(
    <ScrollIntoViewIfNeeded>
      <MockChild />
    </ScrollIntoViewIfNeeded>,
  );

  expect(wrapper).toMatchSnapshot();
  expect(mockScroll).toHaveBeenCalledTimes(1);
  expect(mockScroll).toHaveBeenCalledWith(null, {
    behavior: 'smooth',
    scrollMode: 'if-needed',
  });
});

test('Render in inactive state, then toggle active state', () => {
  const wrapper = shallow(
    <ScrollIntoViewIfNeeded active={false}>
      <MockChild />
    </ScrollIntoViewIfNeeded>,
  );

  expect(wrapper).toMatchSnapshot();
  expect(mockScroll).toHaveBeenCalledTimes(1);

  wrapper.setProps({ active: true });

  expect(mockScroll).toHaveBeenCalledTimes(2);
});

test('Expect `scroll-into-view-if-needed` to _not_ be called on prop update if still not active', () => {
  const wrapper = shallow(
    <ScrollIntoViewIfNeeded active={false}>
      <MockChild />
    </ScrollIntoViewIfNeeded>,
  );

  expect(mockScroll).toHaveBeenCalledTimes(2);

  wrapper.setProps({ className: 'something' });

  expect(mockScroll).toHaveBeenCalledTimes(2);
});

test('Expect element attributes to be forwarded', () => {
  const wrapper = shallow(
    <ScrollIntoViewIfNeeded className="test">
      <MockChild />
    </ScrollIntoViewIfNeeded>,
  );

  expect(wrapper.find('.test').length).toBe(1);
});

test('Expect elementType to be respected', () => {
  const wrapper = shallow(
    <ScrollIntoViewIfNeeded elementType="button">
      <MockChild />
    </ScrollIntoViewIfNeeded>,
  );

  expect(wrapper.find('button').length).toBe(1);
});

test('Expect custom options to be passed to `scroll-into-view-if-needed`', () => {
  shallow(
    <ScrollIntoViewIfNeeded options={{ block: 'center' }}>
      <MockChild />
    </ScrollIntoViewIfNeeded>,
  );

  expect(mockScroll).toHaveBeenLastCalledWith(null, { block: 'center' });
});
