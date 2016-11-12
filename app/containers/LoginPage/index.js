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
    return (
      <button onClick={() => this._doLogin()}>Đăng nhập</button>
    );
  }
}

const mapStateToProps = selectAuth();

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Auth);
