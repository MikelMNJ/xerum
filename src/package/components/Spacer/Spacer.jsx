import React from 'react';
import { StyledSpacer } from './styles';

const Spacer = props => {
  const { size, tabletSize, mobileSize, across } = props;

  return <StyledSpacer $across={across} $size={mobileSize || tabletSize || size || 1} />;
};

export { Spacer };