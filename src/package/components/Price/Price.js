import React, { Fragment } from 'react';
import { truncate, hexValid } from '../../helpers';
import { StyledPrice } from './styles';

const Price = props => {
  const {
    theme,
    selectedTheme,
    value,
    symbol,
    currency,
    limit,
    positiveColor,
    negativeColor,
    ...rest
  } = props;

  const getColor = () => {
    const positive = value >= 0;
    const color = hexValid(negativeColor) && !positive && negativeColor;

    if (hexValid(positiveColor) && positive) return positiveColor;
    return color;
  };

  const buildPrice = () => {
    const val = isNaN(value) ? truncate(0, limit) : truncate(value, limit);
    const price = (
      <Fragment>
        {symbol || "$"} {val} {currency}
      </Fragment>
    );

    return price;
  };

  return (
    <StyledPrice
      theme={theme}
      selectedTheme={selectedTheme}
      color={getColor()}
      {...rest}
    >
      {buildPrice()}
    </StyledPrice>
  );
};

export { Price };