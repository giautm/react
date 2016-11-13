/*
 *
 * Auth
 *
 */

import React from 'react';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import selectAuth from './selectors';
import messages from './messages';
import {
  showLock,
  signOut,
} from './actions';

export class Auth extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    const { profile, onSignIn, onSignOut } = this.props;
    if (profile) {
      const { name } = profile;
      return (
        <div>
          <FormattedMessage {...messages.welcomeName} values={{ name }} />
          <button onClick={onSignOut} >
            <FormattedMessage {...messages.signOutButton} />
          </button>
        </div>
      );
    }

    return (
      <button onClick={onSignIn} >
        <FormattedMessage {...messages.loginButton} />
      </button>
    );
  }
}

Auth.propTypes = {
  onSignIn: React.PropTypes.func.isRequired,
  onSignOut: React.PropTypes.func.isRequired,
  profile: React.PropTypes.object,
};

const mapStateToProps = selectAuth();

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
    onSignIn: () => dispatch(showLock()),
    onSignOut: () => dispatch(signOut()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Auth);
