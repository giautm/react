import expect from 'expect';
import authReducer from '../reducer';
import { fromJS } from 'immutable';

describe('AuthReducer', () => {
  it('returns the initial state', () => {
    expect(authReducer(undefined, {})).toEqual(fromJS({}));
  });
});
