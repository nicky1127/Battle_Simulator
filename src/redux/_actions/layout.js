import * as types from 'redux/_types/layout';

export const setBrandScheme = payload => {
  const obj = { type: types.SET_BRANDSCHEME, payload };
  return obj;
};

export const toggleDropdownOpenID = () => {
  const obj = { type: types.TOGGLE_DROPDOWNOPEN_ID };
  return obj;
};
export const toggleDropdownOpenCallContext = () => {
  const obj = { type: types.TOGGLE_DROPDOWNOPEN_CALLCONTEXT };
  return obj;
};

export const toggleDropdownOpenVerification = () => {
  const obj = { type: types.TOGGLE_DROPDOWNOPEN_VERIFICATION };
  return obj;
};

export const setAllDropdownOpenFalse = () => {
  const obj = { type: types.SET_ALLDROPDOWNOPEN_FALSE };
  return obj;
};

export const setVisibleIframeApp = payload => {
  const obj = { type: types.SET_VISIBLE_IFRAME_APP, payload };
  return obj;
};

export const toggleLauncher = () => {
  const obj = { type: types.TOGGLE_LAUNCHER };
  return obj;
};

const actions = {
  setBrandScheme,
  toggleDropdownOpenID,
  toggleDropdownOpenCallContext,
  toggleDropdownOpenVerification,
  setAllDropdownOpenFalse,
  setVisibleIframeApp,
  toggleLauncher
};

export default actions;
