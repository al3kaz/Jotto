import { actionTypes } from '../actions/actions';
import successReducer from './success.reducer';

test('returns default initial state of "false" when no action is passed', () => {
  const newState = successReducer(undefined, {});
  expect(newState).toBe(false);
});
test('return state of "true" when receiving an action of type "CORRECT_GUESS"', () => {
  const newState = successReducer(undefined, {
    type: actionTypes.CORRECT_GUESS,
  });
  expect(newState).toBe(true);
});
test('return state of "false" when receiving an action of type "RESET_GAME"', () => {
  const newState = successReducer(true, {
    type: actionTypes.RESET_GAME,
  });
  expect(newState).toBe(false);
});
