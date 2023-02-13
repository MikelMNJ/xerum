import React from 'react';
import { TD } from './styles';

const TData = props => {
  const { children, ...rest } = props;

  return (
    <TD {...rest}>
      {children}
    </TD>
  );
};

export { TData };