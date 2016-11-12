import expect from 'expect';
import AuthReducer from '../reducer';
import { fromJS } from 'immutable';

describe('AuthReducer', () => {
  it('returns the initial state', () => {
    expect(AuthReducer(undefined, {})).toEqual(fromJS({}));
  });
});
