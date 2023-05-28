import React from 'react';
import { truncate, hexValid } from '../../helpers';
import { StyledPercent } from './styles';

const Percent = props => {
  const {
    theme,
    selectedTheme,
    current,
    total,
    limit,
    usePlus,
    positiveColor,
    negativeColor,
  } = props;

  const getColor = () => {
    const val = (+(current) / +(total) * 100);
    const positive = !isNaN(val) && val >= 0;
    const color = hexValid(negativeColor) && !positive && negativeColor;

    if (hexValid(positiveColor) && positive) return positiveColor;
    return color;
  };

  const buildPercent = () => {
    const is = +(current);
    const of = +(total);
    const val = isNaN(is / of) ? truncate(0, limit) : truncate(is / of * 100, limit);
    const final = usePlus
      ? `${(is / of * 100) >= 0 ? '+' : ''}${val}`
      : val;

    return final;
  };

  return (
    <StyledPercent
      $theme={theme}
      $selectedTheme={selectedTheme}
      $color={getColor()}
    >
      {buildPercent()}%
    </StyledPercent>
  );
};

export { Percent };