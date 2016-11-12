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
  username: any;
  password: any;

  constructor(props) {
    super(props);
  }

  _doLogin() {
    const { dispatch } = this.props;
    dispatch(showLock());
  }

  render() {
    const {profile} = this.props;
    console.log(profile);
    if (profile == null) {
      return (
        <button onClick={() => this._doLogin()}><FormattedMessage {...messages.loginButton}/></button>
      );
    }

    return (<FormattedMessage {...messages.welcomeName} values={profile}/>);
  }
}

const mapStateToProps = selectAuth();

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Auth);
