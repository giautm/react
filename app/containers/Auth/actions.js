/*
 *
 * Auth actions
 *
 */

import {
  SHOW_LOCK,
  LOCK_SUCCESS,
  LOCK_FAILURE,
  SIGN_OUT,
  SIGNED_OUT_USER,
} from './constants';

export function showLock() {
  return {
    type: SHOW_LOCK,
  };
}

export function signOut() {
  return {
    type: SIGN_OUT,
  };
}

export function lockSuccess(profile, token) {
  return {
    type: LOCK_SUCCESS,
    profile,
    token,
    error: null,
  };
}

export function lockFailure(error) {
  return {
    type: LOCK_FAILURE,
    profile: null,
    token: null,
    error,
  };
}

export function signedOutUser() {
  return {
    type: SIGNED_OUT_USER,
  };
}
