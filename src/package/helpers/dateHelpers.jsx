import moment from 'moment';

export const daysInMonth = args => {
  const { providedDate, disablePastDates, disableFutureDates, inThisMonth } = args;

  const days = [];
  const daysInMonth = moment(providedDate).daysInMonth();
  const yesterday = moment().subtract(1, 'day');
  const today = moment();

  for (let i = 0; i < daysInMonth; i++) {
    const date = moment(providedDate).date(i + 1);
    const pastDisabled = disablePastDates && date <= yesterday;
    const futureDisabled = disableFutureDates && date > today;

    days.push({
      dayId: i,
      day: date.format('dd'),
      date: date,
      inThisMonth,
      disabled: pastDisabled || futureDisabled,
    });
  }

  return days;
};