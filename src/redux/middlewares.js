export const ivrConverter = store => next => action => {
  const { dateFormat } = constants;
  if (action.type === ivr_types.GET_IVR_SUCCESS) {
    console.log('action.payload', action.payload);
    const idTypeProcessed = validateIDType(action.payload, store);
    const keywordCapitalised = capitaliseFirstLetter(action.payload.Keyword);
    const verTypeProcessed = getVerificationType(action.payload.VerType);
    let waitTime, waitTimeSeconds, waitTimeColour, formattedDOB;
    if (action.payload['BreakoutTime']) {
      waitTime = new DateFormatter(action.payload['BreakoutTime'], dateFormat.HHMMSS).dateFormatter(
        dateFormat.FORMAT_TIME
      );
      waitTimeSeconds = new DateFormatter(
        action.payload['BreakoutTime'],
        dateFormat.HHMMSS
      ).getSeconds();
      waitTimeColour = getWaitTimeClr(waitTimeSeconds);
    }
    if (action.payload.DOB) {
      formattedDOB = new DateFormatter(action.payload.DOB, dateFormat.DDMMYYYY).dateFormatter(
        dateFormat.FORMAT_DAILY
      );
    }
    action.payload = {
      ...action.payload,
      ...idTypeProcessed,
      keywordCapitalised,
      verTypeProcessed,
      waitTime,
      waitTimeSeconds,
      waitTimeColour,
      formattedDOB
    };
    console.log('action.payload', action.payload);
  }
  return next(action);
};
