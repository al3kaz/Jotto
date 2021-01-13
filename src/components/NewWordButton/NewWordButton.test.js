import React from 'react';
import { shallow } from 'enzyme';
import { findByTestAttr, checkProps } from '../../../test/test.utils';
import NewWordButton from './NewWordButton.component';

const defaultProps = { success: false };

const setup = (props = {}) => {
  const setupProps = { ...defaultProps, ...props };
  return shallow(<NewWordButton {...setupProps} />);
};

describe('render', () => {
  test('render without error', () => {
    const wrapper = setup();
    const component = findByTestAttr(wrapper, 'component-new-word-button');
    expect(component).toBe(1);
  });
  test('renders no text when `success` prop is false', () => {
    const wrapper = setup({ success: false });
    const component = findByTestAttr(wrapper, 'component-new-word-button');
    expect(component.text()).toBe('');
  });
  test('renders non-empty text when `success` prop is true', () => {
    const wrapper = setup({ success: true });
    const component = findByTestAttr(wrapper, 'component-new-word-button');
    expect(component.text()).not.ToBe(0);
  });
  test('does not throw warning with expected props', () => {
    const expectedProps = { success: false, resetAction: () => {} };
    checkProps(NewWordButton, expectedProps);
  });
  test('calls `resetAction` prop upon button click', () => {});
});
