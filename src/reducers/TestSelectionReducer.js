import {
  SELECT_TEST
} from '../actions/types';

export default (state = null, action) => {
  switch (action.type) {
    case SELECT_TEST:
      return action.payload;
    default:
      return state;
  }
};
