/*
 *
 * Date constants
 *
 * these constants serve as a centralized place for all types of dates
 * we support on the platform as well as dates provided by backend
 */


const dateConstants = {
  displayDate    : 'DD/MM/YYYY',
  displayTime    : 'HH:MM',
  displayDateTime: 'DD/MM/YY HH:MM',
  inputValueDate : 'YYYY-MM-DD',
  // current implementation supports UTC timestamp
  serverDate     : ''
};

export {
  dateConstants
};
