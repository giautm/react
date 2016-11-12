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
} from './actions';

export class Auth extends React.Component { // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props);
    this.doLogin = this.doLogin.bind(this);
  }

  doLogin() {
    const { dispatch } = this.props;
    dispatch(showLock());
  }

  render() {
    const { profile } = this.props;
    if (profile) {
      return (<FormattedMessage {...messages.welcomeName} values={profile} />);
    }

    return (
      <button onClick={this.doLogin}>
        <FormattedMessage {...messages.loginButton} />
      </button>
    );
  }
}

Auth.propTypes = {
  dispatch: React.PropTypes.func.isRequired,
  profile: React.PropTypes.object,
};

const mapStateToProps = selectAuth();

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Auth);
