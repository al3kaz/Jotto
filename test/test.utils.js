import checkPropTypes from 'check-prop-types';

export const findByTestAttr = (wrapper, val) => {
  return wrapper.find(`[data-test='${val}']`);
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
