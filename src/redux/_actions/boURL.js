import * as types from 'redux/_types/boURL';

export const parseDesktopURLStart = () => {
  const obj = { type: types.PARSE_DESKTOP_URL_START };
  return obj;
};

export const parseDesktopURLSuccess = payload => {
  const obj = { type: types.PARSE_DESKTOP_URL_SUCCESS, payload };
  return obj;
};

export const parseDesktopURLFailure = () => {
  const obj = { type: types.PARSE_DESKTOP_URL_FAILURE };
  return obj;
};

const actions = { parseDesktopURLStart, parseDesktopURLSuccess, parseDesktopURLFailure };

export default actions;
