import {
  takeLatest
} from 'redux-saga'
import {
  take,
  call,
  put,
  select
} from 'redux-saga/effects';
import Auth0Lock from 'auth0-lock';

import {
  lockFailure,
  lockSuccess,
} from './actions';
import {
  SHOW_LOCK,
} from './constants';

// TODO: import from json.
const lockOptions = {
  clientId: 'Xarm2iOdGZ2As22oOJZqjukD5ixpN4bE',
  domain: 'timnguoithan.auth0.com',
  options: {},
};

const lock = new Auth0Lock(lockOptions.clientId, lockOptions.domain, lockOptions.options);
lock.on('authenticated', (authResult) => {
  lock.getProfile(authResult.idToken, function(error, profile) {
    if (error) {
      put(lockFailure(error));
    } else {
      localStorage.setItem('id_token', authResult.idToken);
      localStorage.setItem('profile', JSON.stringify(profile));

      put(lockSuccess(profile));
    }
  });
});

lock.on('authorization_error', (error) => {
  console.log(error);
});

export function* showLockSaga() {
  yield* takeLatest(SHOW_LOCK, () => {
    lock.show();
  });
}

// All sagas to be loaded
export default [
  showLockSaga,
];
