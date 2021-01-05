import checkPropTypes from 'check-prop-types';
import { createStore } from 'redux';
import rootReducer from '../src/redux/root-reducer';

export const findByTestAttr = (wrapper, val) => {
  return wrapper.find(`[data-test='${val}']`);
};

export const storeFactory = (initialState) => {
  return createStore(rootReducer, initialState);
};

export const checkProps = (component, conformingProp) => {
  const propError = checkPropTypes(
    component.propType,
    conformingProp,
    'prop',
    component.name
  );
  expect(propError).toBeUndefined();
};
