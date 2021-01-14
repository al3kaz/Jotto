import { actionTypes } from '../actions/actions';
import { guessedWordReducer } from './guessedWord.reducer';

test('returns state of `[]` upon receiving an action of type `RESET_GAME`', () => {
  const initialState = [{ guessedWord: 'train', letterMatchCount: 3 }];
  const newState = guessedWordReducer(initialState, {
    type: actionTypes.RESET_GAME,
  });
  expect(newState).toEqual([]);
});
