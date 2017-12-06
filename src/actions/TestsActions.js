import {
  SELECT_TEST
} from './types';

export const selectTest = (test) => {
  return {
    type: SELECT_TEST,
    payload: test
  };
};
