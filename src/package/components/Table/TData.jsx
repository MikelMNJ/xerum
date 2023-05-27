import React from 'react';
import { TD } from './styles';

const TData = props => {
  const { children } = props;

  return (
    <TD>
      {children}
    </TD>
  );
};

export { TData };