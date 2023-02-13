import React from 'react';
import { LI } from './styles';

const TRow = props => {
  const { children, callback, provided, draggable, ...rest } = props;

  return (
    <LI
      onClick={() => callback?.()}
      callback={callback}
      ref={provided?.innerRef}
      draggable={draggable}
      {...provided?.draggableProps}
      {...provided?.dragHandleProps}
      {...rest}
    >
      {children}
    </LI>
  );
};

export { TRow };