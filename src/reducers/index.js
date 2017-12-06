import { combineReducers } from 'redux';
import TestSelectionReducer from './TestSelectionReducer';

export default combineReducers({
  selectedTest: TestSelectionReducer
});
