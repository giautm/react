/*
 * Auth Messages
 *
 * This contains all the text for the Auth component.
 */
import { defineMessages } from 'react-intl';

export default defineMessages({
  loginButton: {
    id: 'app.containers.Auth.LoginButton',
    defaultMessage: 'Login',
  },
  signOutButton: {
    id: 'app.containers.Auth.SignOutButton',
    defaultMessage: 'Sign Out',
  },
  welcomeName: {
    id: 'app.containers.Auth.WelcomeName',
    defaultMessage: 'Hi, {name}',
  },
});
