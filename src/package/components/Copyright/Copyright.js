import React from 'react';
import { StyledCopyright } from './styles';
import moment from 'moment';

const Copyright = props => {
  const { name, trade, rights, message, ...rest } = props;
  const year = moment().year();
  const defaultRights = `all rights reserved${!message ? '.' : ''}`;
  const hasMessage = message?.length > 0;

  return (
    <StyledCopyright {...rest}>
      {trade && <span>&reg; &amp;</span>}&copy;{year}
      {name && ` ${name}`}
      {rights && `, ${defaultRights}`}
      {hasMessage && ` — ${message}`}
    </StyledCopyright>
  );
};

export { Copyright };