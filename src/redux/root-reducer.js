import { combineReducers } from 'redux';
import successReducer from './reducers/success.reducer';

export default combineReducers({
  success: successReducer,
});
