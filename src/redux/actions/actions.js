import axios from 'axios';
import { getLetterMatchCount } from '../../helpers/index';

export const actionTypes = {
  CORRECT_GUESS: 'CORRECT_GUESS',
  GUESS_WORD: 'GUESS_WORD',
  SET_SECRET_WORD: 'SET_SECRET_WORD',
  RESET_GAME: 'RESET_GAME',
  GIVE_UP: 'GIVE_UP',
};

export const giveUp = () => {
  return function (dispatch) {
    dispatch({
      type: actionTypes.GIVE_UP,
    });
  };
};

export const guessWord = (guessedWord) => {
  return function (dispatch, getState) {
    const secretWord = getState().secretWord;
    const letterMatchCount = getLetterMatchCount(guessedWord, secretWord);

    dispatch({
      type: actionTypes.GUESS_WORD,
      payload: { guessedWord, letterMatchCount },
    });

    if (guessedWord === secretWord) {
      dispatch({ type: actionTypes.CORRECT_GUESS });
    }
  };
};

const getSecretWordDispatch = async (dispatch) => {
  const response = await axios.get('http://localhost:3030');
  dispatch({
    type: actionTypes.SET_SECRET_WORD,
    payload: response.data,
  });
};

export const getSecretWord = () => {
  return getSecretWordDispatch;
};

export const resetGame = () => {
  return (dispatch) => {
    dispatch({ type: actionTypes.RESET_GAME });
    return getSecretWordDispatch(dispatch);
  };
};
