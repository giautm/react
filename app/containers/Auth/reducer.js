/*
 *
 * Auth reducer
 *
 */

import {
  fromJS,
} from 'immutable';
import {
  DEFAULT_ACTION,
  LOCK_SUCCESS,
  SIGNED_OUT_USER,
} from './constants';

const initialState = fromJS({});

function AuthReducer(state = initialState, action) {
  switch (action.type) {
    case DEFAULT_ACTION:
      return state;
    case LOCK_SUCCESS:
      return state
        .set('token', action.token)
        .set('profile', action.profile);
    case SIGNED_OUT_USER:
      return state
        .set('token', null)
        .set('profile', null);
    default:
      return state;
  }
}

export default AuthReducer;
