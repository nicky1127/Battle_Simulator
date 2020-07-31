// import logger from 'utils/Logger';
// import * as toast_types from 'redux/_types/toast';
// import DisplayToast from 'components/event_handling/DisplayToast';
// // import * as ivr_types from 'redux/api/ivr/actions/action-types';
// // import {
// //   validateIDType,
// //   capitaliseFirstLetter,
// //   getWaitTimeClr,
// //   getVerificationType
// // } from 'helpers/panelsHelper';
// // import DateFormatter from 'helpers/DateFormatter';
// // import constants from 'constants/index';

// export const reduxLogger = store => next => action => {
//   // logger.reduxGroup(action.type);
//   logger.redux('dispatching', action);

//   let result = next(action);

//   logger.redux('next state', store.getState());
//   // logger.reduxGroupEnd();
//   return result;
// };

// export const crashReporter = store => next => action => {
//   try {
//     return next(action);
//   } catch (err) {
//     logger.error('Caught an exception!', err);
//   }
// };

// export const toastDispatcher = store => next => action => {
//   let params;
//   switch (action.type) {
//     case toast_types.DISPATCH_TOAST_ERROR:
//       params = {
//         messageType: toast_types.DISPATCH_TOAST_ERROR,
//         messageContent: action.payload.msg,
//         messageTitle: 'Error - Something has gone wrong'
//       };
//       break;
//     case toast_types.DISPATCH_TOAST_WARN:
//       params = {
//         messageType: toast_types.DISPATCH_TOAST_WARN,
//         messageContent: action.payload.msg,
//         messageTitle: 'Warning'
//       };
//       break;
//     case toast_types.DISPATCH_TOAST_INFO:
//       params = {
//         messageType: toast_types.DISPATCH_TOAST_INFO,
//         messageContent: action.payload.msg,
//         messageTitle: 'Information'
//       };
//       break;
//     case toast_types.DISPATCH_TOAST_SUCCESS:
//       params = {
//         messageType: toast_types.DISPATCH_TOAST_SUCCESS,
//         messageContent: action.payload.msg,
//         messageTitle: 'Success!'
//       };
//       break;
//     default:
//       return next(action);
//   }
//   const id = DisplayToast(params);
//   action.payload.toastId = id;
//   return next(action);
// };

// // export const ivrConverter = store => next => action => {
// //   const { dateFormat } = constants;
//   // if (action.type === ivr_types.GET_IVR_SUCCESS) {
//   //   console.log('action.payload', action.payload);
//   //   const idTypeProcessed = validateIDType(action.payload, store);
//   //   const keywordCapitalised = capitaliseFirstLetter(action.payload.Keyword);
//   //   const verTypeProcessed = getVerificationType(action.payload.VerType);
//   //   let waitTime, waitTimeSeconds, waitTimeColour, formattedDOB;
//   //   if (action.payload['BreakoutTime']) {
//   //     waitTime = new DateFormatter(action.payload['BreakoutTime'], dateFormat.HHMMSS).dateFormatter(
//   //       dateFormat.FORMAT_TIME
//   //     );
//   //     waitTimeSeconds = new DateFormatter(
//   //       action.payload['BreakoutTime'],
//   //       dateFormat.HHMMSS
//   //     ).getSeconds();
//   //     waitTimeColour = getWaitTimeClr(waitTimeSeconds);
//   //   }
//   //   if (action.payload.DOB) {
//   //     formattedDOB = new DateFormatter(action.payload.DOB, dateFormat.DDMMYYYY).dateFormatter(
//   //       dateFormat.FORMAT_DAILY
//   //     );
//   //   }
//   //   action.payload = {
//   //     ...action.payload,
//   //     ...idTypeProcessed,
//   //     keywordCapitalised,
//   //     verTypeProcessed,
//   //     waitTime,
//   //     waitTimeSeconds,
//   //     waitTimeColour,
//   //     formattedDOB
//   //   };
//   //   console.log('action.payload', action.payload);
//   // }
// //   return next(action);
// // };
