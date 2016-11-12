/*
 *
 * Auth actions
 *
 */

import {
  SHOW_LOCK,
  LOCK_SUCCESS,
  LOCK_FAILURE,
} from './constants';

export function showLock() {
  return {
    type: SHOW_LOCK
  };
}

export function lockSuccess(profile, token) {
  console.log(profile);
  return {
    type: LOCK_SUCCESS,
    profile,
    token,
    error: null,
  }
}

export function lockFailure(error) {
  return {
    type: LOCK_FAILURE,
    error
  }
}
