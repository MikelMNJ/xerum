import moment from 'moment';

export const daysInMonth = args => {
  const { providedDate, disablePastDates, inThisMonth } = args;

  const days = [];
  const daysInMonth = moment(providedDate).daysInMonth();
  const yesterday = moment().subtract(1, 'day');

  for (let i = 0; i < daysInMonth; i++) {
    const date = moment(providedDate).date(i + 1);
    const pastDiabled = disablePastDates && date <= yesterday;

    days.push({
      dayId: i,
      day: date.format('dd'),
      date: date,
      inThisMonth,
      disabled: pastDiabled,
    });
  }

  return days;
};