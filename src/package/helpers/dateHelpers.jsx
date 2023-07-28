import moment from 'moment';

export const daysInMonth = args => {
  const { month, disablePastDates, pastDateDisabled } = args;

  const days = [];
  const daysInMonth = moment().month(month).daysInMonth();

  for (let i = 0; i < daysInMonth; i++) {
    const date = moment().month(month).date(i + 1);
    const pastDiabled = disablePastDates && pastDateDisabled(date);
    const inThisMonth = date.month() === moment().month();

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