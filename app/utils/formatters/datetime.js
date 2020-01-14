import moment from 'moment';

import { dateConstants } from '../../constants/date';

const displayDate = (date, format = dateConstants.displayDate) => {
  return moment(date).format(format);
};

const fromNowDate = (date) => {
  return moment(date).fromNow();
};

export {
  displayDate,
  fromNowDate,
}