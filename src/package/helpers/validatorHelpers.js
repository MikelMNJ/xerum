import jwt_decode from 'jwt-decode';
import moment from 'moment';
import _ from 'lodash';

export const tokenValid = token => {
  let expired = true;

  try {
    const expires = moment(jwt_decode(token).exp * 1000);
    expired = moment() > expires;
  } catch (error) {
    console.error(error.message);
  } finally {
    const isValid = !expired;
    return isValid;
  }
};

export const hexValid = val => {
  const isValid = val?.startsWith?.('#') && (
    val?.length === 4
    || val?.length === 7
    || val?.length === 9
  );

  if (isValid) return val;
};

export const iconValid = val => {
  const types = [ 'solid', 'regular', 'light', 'thin', 'duotone', 'sharp', 'brands' ];
  const isValid =  types.find(type => val?.startsWith?.(`fa-${type} fa-`));
  if (isValid) return val;
};

export const btnValid = val => {
  const types = [ 'solid', 'ghost', 'transparent' ];
  const isValid = val && types.find(type => val === type);

  if (isValid) return val;
};

export const urlValid = val => {
  const regex = /^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/g;
  const hasProtocol = val?.includes?.('https://');
  const isValid = regex.test(val);

  if (isValid) {
    return hasProtocol ? val : `https://${val}`;
  };

  return val?.includes?.('localhost') ? val : '';
};

export const timeframeValid = val => {
  const validTimeframes = [ 'seconds', 'minutes', 'hours', 'days', 'weeks', 'months', 'years' ];
  const isValid = validTimeframes.find(time => val?.toLowerCase?.() === time);

  if (isValid) return val.toLowerCase?.();
};