import checkPropTypes from 'check-prop-types';
import { createStore, applyMiddleware } from 'redux';
import rootReducer from '../src/redux/root-reducer';
import { middlewares } from '../src/redux/store';

export const findByTestAttr = (wrapper, val) => {
  return wrapper.find(`[data-test='${val}']`);
};

export const storeFactory = (initialState) => {
  const createStoreWithMiddleware = applyMiddleware(...middlewares)(
    createStore
  );
  return createStoreWithMiddleware(rootReducer, initialState);
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
