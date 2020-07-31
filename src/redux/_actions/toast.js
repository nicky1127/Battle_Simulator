import * as types from 'redux/_types/toast';
import logger from 'utils/Logger';

// export const dispatchToastError = msg => {
//   const obj = { type: types.DISPATCH_TOAST_ERROR, payload: { msg } };
//   return obj;
// };

// export const dispatchToastWarn = msg => {
//   const obj = { type: types.DISPATCH_TOAST_WARN, payload: { msg } };
//   return obj;
// };

// export const dispatchToastInfo = msg => {
//   const obj = { type: types.DISPATCH_TOAST_INFO, payload: { msg } };
//   return obj;
// };

// export const dispatchToastSuccess = msg => {
//   const obj = { type: types.DISPATCH_TOAST_SUCCESS, payload: { msg } };
//   return obj;
// };

export const dispatchToast = (type = 'error', msg) => {
  try {
    switch (type) {
      case 'error':
        return { type: types.DISPATCH_TOAST_ERROR, payload: { msg } };
      case 'warn':
        return { type: types.DISPATCH_TOAST_WARN, payload: { msg } };
      case 'info':
        return { type: types.DISPATCH_TOAST_INFO, payload: { msg } };
      case 'success':
        return { type: types.DISPATCH_TOAST_SUCCESS, payload: { msg } };
      default:
        throw new RangeError(`The toast type ${type} is not valid`);
    }
  } catch (err) {
    logger.error(err);
    return { type: '' };
  }
};

export default { dispatchToast };
