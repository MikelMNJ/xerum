import React from 'react';
import { StyledCalendar, MonthNav, NavIcon, DayHeaders, HeaderItem, Days, Day } from './styles';
import { Spacer } from '../Spacer/Spacer';
import { daysInMonth, iconValid } from '../../helpers';
import moment from 'moment';

const today = moment();
const daysThisMonth = moment().daysInMonth();
const thisMonth = moment().month();
const lastMonth = moment().subtract(1, 'months').month();
const nextMonth = moment().add(1, 'months').month();
const thisYear = moment().year();
const dayHeaders = moment.weekdaysShort().map(day => day.slice(0, 2));
const maxDisplayWeeks = 6;
const maxDisplayDays = dayHeaders.length * maxDisplayWeeks;
const preMonthFillerDates = moment().date(1).day();
const postMonthFillerDates = maxDisplayDays - (daysThisMonth + preMonthFillerDates);
const pastDateDisabled = date => date < today;

const Calendar = props => {
  const {
    theme,
    selectedTheme,
    disablePastDates,
    icon,
    fontFamily,
    headerFontFamily,
    headerColor,
    textColor,
    textHoverColor,
    bgHoverColor,
    activeTextColor,
    activeTextHoverColor,
    activeBGColor,
    activeBGHoverColor,
    disabledTextColor,
    disabledBgColor,
    disabledBGHoverColor,
    iconColor,
    iconBGColor,
    iconBGHoverColor,
    iconSize,
    selectedDate,
    callback,
  } = props;

  const allDaysLastMonth = daysInMonth({ month: lastMonth, disablePastDates, pastDateDisabled });
  const allDaysThisMonth = daysInMonth({ month: thisMonth, disablePastDates, pastDateDisabled });
  const allDaysNextMonth = daysInMonth({ month: nextMonth, disablePastDates, pastDateDisabled });
  const displayDates = [
    ...allDaysLastMonth.slice(-preMonthFillerDates),
    ...allDaysThisMonth,
    ...allDaysNextMonth.slice(0, postMonthFillerDates),
  ];

  const headers = dayHeaders.map(day => (
    <HeaderItem key={day} $headerFontFamily={headerFontFamily}>
      {day}
    </HeaderItem>
  ));

  const days = displayDates.map((item, index) => {
    const { date, disabled, inThisMonth } = item;
    const existingDateActive = moment(selectedDate, 'MMMM Do, YYYY')
      ?.format('YYYY-MM-DD') === date.format('YYYY-MM-DD');
    const active = selectedDate && existingDateActive;

    return (
      <Day
        key={index}
        $theme={theme}
        $selectedTheme={selectedTheme}
        $active={active}
        $disabled={disabled}
        $inThisMonth={inThisMonth}
        $textColor={textColor}
        $textHoverColor={textHoverColor}
        $bgHoverColor={bgHoverColor}
        $activeTextColor={activeTextColor}
        $activeTextHoverColor={activeTextHoverColor}
        $activeBGColor={activeBGColor}
        $activeBGHoverColor={activeBGHoverColor}
        $disabledTextColor={disabledTextColor}
        $disabledBGColor={disabledBgColor}
        $disabledBGHoverColor={disabledBGHoverColor}
        $disablePastDates={disablePastDates}
        onClick={() => {
          const different = selectedDate !== date.format('MMMM Do, YYYY');
          if (!disabled) callback?.(different ? date : null);
        }}
      >
        {date.format('D')}
      </Day>
    );
  });

  return (
    <StyledCalendar $fontFamily={fontFamily} onClick={e => e.stopPropagation()}>
      <MonthNav $headerFontFamily={headerFontFamily}>
        <NavIcon
          $theme={theme}
          $selectedTheme={selectedTheme}
          $iconColor={iconColor || textColor}
          $iconBGColor={iconBGColor}
          iconBGHoverColor={iconBGHoverColor}
          $iconSize={iconSize}
        >
          {iconValid(icon)
            ? <i className={icon} />
            : icon || <i className='fa-solid fa-chevron-left' />
          }
        </NavIcon>

        <div>
          {moment().month(6).format('MMMM')}&nbsp;
          {thisYear}
        </div>

        <NavIcon
          $theme={theme}
          $selectedTheme={selectedTheme}
          $iconColor={iconColor || textColor}
          $iconBGColor={iconBGColor}
          iconBGHoverColor={iconBGHoverColor}
          $iconSize={iconSize}
        >
          {iconValid(icon)
            ? <i className={icon} />
            : icon || <i className='fa-solid fa-chevron-right' />
          }
        </NavIcon>
      </MonthNav>

      <Spacer mobileSize={1.25} size={2} />

      <DayHeaders $theme={theme} $selectedTheme={selectedTheme} $headerColor={headerColor}>
        {headers}
      </DayHeaders>

      <Days>
        {days}
      </Days>
    </StyledCalendar>
  );
};

export { Calendar };