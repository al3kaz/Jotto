import React from 'react';
import { shallow } from 'enzyme';
import { findByTestAttr } from '../../../test/test.utils';
import { storeFactory } from '../../../test/test.utils';
import Input from './input';

const setup = (initialState = {}) => {
  const store = storeFactory(initialState);
  const wrapper = shallow(<Input store={store} />)
    .dive()
    .dive();
  return wrapper;
};

describe('render', () => {
  describe('word has not been guessed', () => {
    test('render component withount error', () => {});
    test('render input box', () => {});
    test('render submit button', () => {});
  });
  describe('word has been guessed', () => {
    test('render component withount error', () => {});
    test('does not render input box', () => {});
    test('does not render submit button', () => {});
  });
});
