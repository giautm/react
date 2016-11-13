import {
  takeLatest,
} from 'redux-saga';
import {
  put,
} from 'redux-saga/effects';
import Auth0Lock from 'auth0-lock';

import {
  lockFailure,
  lockSuccess,
  signedOutUser,
} from './actions';
import {
  SHOW_LOCK,
  SIGN_OUT,
} from './constants';

// TODO: import from json.
const lockOptions = {
  clientId: 'Xarm2iOdGZ2As22oOJZqjukD5ixpN4bE',
  domain: 'timnguoithan.auth0.com',
  options: {
    // autoclose: true,
    // auth: {
    //   redirect: false,
    // }
  },
};

const lock = new Auth0Lock(lockOptions.clientId, lockOptions.domain, lockOptions.options);

export function initLockWithDispatch({ dispatch }) {
  lock.on('authenticated', (authResult) => {
    lock.getProfile(authResult.idToken, (error, profile) => {
      if (error) {
        dispatch(lockFailure(error));
      } else {
        localStorage.setItem('id_token', authResult.idToken);
        localStorage.setItem('profile', JSON.stringify(profile));

        dispatch(lockSuccess(profile, authResult.idToken));
      }
    });
  });
}

function* signOut() {
  localStorage.removeItem('id_token');
  localStorage.removeItem('profile');
  yield put(signedOutUser());
}

export function* showLockSaga() {
  yield* takeLatest(SHOW_LOCK, () => {
    lock.show();
  });
}

export function* signOutSaga() {
  yield* takeLatest(SIGN_OUT, signOut);
}
// All sagas to be loaded
export default [
  showLockSaga,
  signOutSaga,
];
