import decode from 'jwt-decode';

export function getTokenExpirationDate(token) {
  const decoded = decode(token);
  if (decoded.exp) {
    const date = new Date(0); // The 0 here is the key, which sets the date to the epoch
    date.setUTCSeconds(decoded.exp);

    return date;
  }

  return null;
}

export function isTokenExpired(token) {
  const offsetSeconds = 0;
  const date = getTokenExpirationDate(token);
  if (date) {
    return !(date.valueOf() > (new Date().valueOf() + (offsetSeconds * 1000)));
  }

  return false;
}
