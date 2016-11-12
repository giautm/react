/*
 *
 * Auth reducer
 *
 */

import { fromJS } from 'immutable';
import {
  DEFAULT_ACTION,
  LOCK_SUCCESS,
} from './constants';

const initialState = fromJS({});

function AuthReducer(state = initialState, action) {
  switch (action.type) {
    case DEFAULT_ACTION:
      return state;
    case LOCK_SUCCESS:
      console.log(action);
      const {token, profile} = action;
      return state
        .set('token', token)
        .set('profile', profile);
    default:
      return state;
  }
}

export default AuthReducer;
