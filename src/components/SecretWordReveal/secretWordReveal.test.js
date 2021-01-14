import React from 'react';
import { shallow } from 'enzyme';
import { findByTestAttr, checkProps } from '../../../test/test.utils';
import SecretWordReveal from './secretWordReveal.component';

const secretWord = 'party';
const defaultProps = { display: false, secretWord };

const setup = (props = {}) => {
  const setupProps = { ...defaultProps, ...props };
  return shallow(<SecretWordReveal {...setupProps} />);
};

describe('render', () => {
  test('renders without error', () => {
    const wrapper = setup();
    const component = findByTestAttr(wrapper, 'component-secret-word-reveal');
    expect(component.length).toBe(1);
  });
  test('renders no text when `display` prop is true', () => {
    const wrapper = setup({ display: true });
    const component = findByTestAttr(wrapper, 'component-secret-word-reveal');
    expect(component.text()).toBe('');
  });
  test('renders message containing secret word when `display` prop is false', () => {
    const wrapper = setup(defaultProps);
    const component = findByTestAttr(wrapper, 'secret-word-message');
    expect(component.text()).not.toBe(0);
  });
  test('does not throw warning with expected props', () => {
    const expectedProps = defaultProps;
    checkProps(SecretWordReveal, expectedProps);
  });
});
