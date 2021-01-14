import { combineReducers } from 'redux';
import guessedWordReducer from './reducers/guessedWord.reducer';
import secretWordReducer from './reducers/secretWord.reducer';
import successReducer from './reducers/success.reducer';
import giveUpReducer from './reducers/giveUp.reducer';

export default combineReducers({
  success: successReducer,
  guessedWords: guessedWordReducer,
  secretWord: secretWordReducer,
  giveUp: giveUpReducer,
});
