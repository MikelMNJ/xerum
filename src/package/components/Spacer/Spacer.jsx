import React from 'react';
import { StyledSpacer } from './styles';

const Spacer = props => {
  const { size, across } = props;

  return <StyledSpacer $across={across} $size={size || 1} />;
};

export { Spacer };