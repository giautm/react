import {
  takeLatest,
} from 'redux-saga';
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
  lock.on('authorization_error', (error) => {
    console.log(error);
  });
}

export function* showLockSaga() {
  yield* takeLatest(SHOW_LOCK, () => {
    lock.show();
  });
}

// All sagas to be loaded
export default [
  showLockSaga,
];
