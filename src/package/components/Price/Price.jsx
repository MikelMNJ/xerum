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
    privacy,
    color,
    ...rest
  } = props;

  const getColor = () => {
    const positive = value >= 0;

    if (hexValid(negativeColor) && !positive) return negativeColor;
    if (hexValid(positiveColor) && positive) return positiveColor;
    return color;
  };

  const buildPrice = () => {
    const val = isNaN(value) ? truncate(0, limit) : truncate(value, limit);
    const price = (
      <Fragment>
        {privacy ? '' : symbol || '$'}{privacy ? '***' : val} {currency}
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