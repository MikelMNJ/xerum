import React, { useState, useEffect } from 'react';
import { StyledCalendar, MonthNav, NavIcon, DayHeaders, HeaderItem, Days, Day } from './styles';
import { Spacer } from '../Spacer/Spacer';
import { daysInMonth, iconValid } from '../../helpers';
import moment from 'moment';
import _ from 'lodash';

const Calendar = props => {
  const {
    theme,
    selectedTheme,
    disablePastDates,
    disableFutureDates,
    prevIcon,
    nextIcon,
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
    disabledBGHoverColor,
    iconColor,
    iconBGColor,
    iconBGHoverColor,
    iconSize,
    selectedDate,
    optional,
    optionsMenuVisible,
    callback,
  } = props;

  const defaultDate = !_.isEmpty(selectedDate) ? moment(selectedDate, 'MMMM Do, YYYY') : moment();
  const [ currentMonth, setCurrentMonth ] = useState(defaultDate);

  useEffect(() => {
    if (!optionsMenuVisible) setCurrentMonth(defaultDate);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ optionsMenuVisible ]);

  useEffect(() => {
    if (!_.isEmpty(selectedDate)) {
      const formattedDate = moment(selectedDate, 'MMMM Do, YYYY');
      setCurrentMonth(formattedDate);
    }
  }, [ selectedDate ]);

  const totalDays = moment(currentMonth).daysInMonth();
  const thisMonth = moment(currentMonth);
  const lastMonth = moment(currentMonth).subtract(1, 'months');
  const nextMonth = moment(currentMonth).add(1, 'months');
  const dayHeaders = moment.weekdaysShort().map(day => day.slice(0, 2));
  const maxDisplayWeeks = 6;
  const maxDisplayDays = dayHeaders.length * maxDisplayWeeks;
  const preMonthFillerDates = moment(currentMonth).date(1).day();
  const postMonthFillerDates = maxDisplayDays - (totalDays + preMonthFillerDates);
  const allDaysLastMonth = daysInMonth({ providedDate: lastMonth, disablePastDates, disableFutureDates });

  const allDaysThisMonth = daysInMonth({
    providedDate: thisMonth,
    disablePastDates,
    disableFutureDates,
    inThisMonth: true,
  });

  const allDaysNextMonth = daysInMonth({ providedDate: nextMonth, disablePastDates, disableFutureDates });

  const displayDates = [
    ...allDaysLastMonth.slice(allDaysLastMonth.length - preMonthFillerDates),
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
        $disabledBGHoverColor={disabledBGHoverColor}
        $disablePastDates={disablePastDates}
        $disableFutureDates={disableFutureDates}
        onClick={() => {
          const different = selectedDate !== date.format('MMMM Do, YYYY');
          const newDate = different || !optional ? date : null;
          if (!disabled) callback?.(newDate);
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
          onClick={() => {
            const previousMonth = moment(currentMonth).subtract(1, 'months');
            setCurrentMonth(previousMonth);
          }}
        >
          {iconValid(prevIcon)
            ? <i className={prevIcon} />
            : prevIcon || <i className='fa-solid fa-chevron-left' />
          }
        </NavIcon>

        <div>
          {currentMonth.format('MMMM YYYY')}
        </div>

        <NavIcon
          $theme={theme}
          $selectedTheme={selectedTheme}
          $iconColor={iconColor || textColor}
          $iconBGColor={iconBGColor}
          iconBGHoverColor={iconBGHoverColor}
          $iconSize={iconSize}
          onClick={() => {
            const nextMonth = moment(currentMonth).add(1, 'months');
            setCurrentMonth(nextMonth);
          }}
        >
          {iconValid(nextIcon)
            ? <i className={nextIcon} />
            : nextIcon || <i className='fa-solid fa-chevron-right' />
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