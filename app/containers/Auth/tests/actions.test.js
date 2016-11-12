import expect from 'expect';
import {
  showLock,
} from '../actions';
import {
  SHOW_LOCK,
} from '../constants';

describe('Auth actions', () => {
  describe('Show lock Action', () => {
    it('has a type of SHOW_LOCK', () => {
      const expected = {
        type: SHOW_LOCK,
      };
      expect(showLock()).toEqual(expected);
    });
  });
});
