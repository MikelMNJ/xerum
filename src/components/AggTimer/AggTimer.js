import React, { Fragment, useState, useEffect } from 'react';
import { aggTime } from 'helpers/timeHelpers';
import './AggTimer.scss';
import { addEvent, removeEvent } from '../../helpers/utilityHelpers';

const AggTimer = props => {
  const {
    timeframe,
    aggregate,
    local,
    details,
    callback,
    limit,
    compact,
    ...rest
  } = props;

  const [ time, setTime ] = useState(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(aggTime(props));
    }, 1000);

    if (!time) addEvent('onLoad', setInterval(interval));

    return () => removeEvent('onLoad', clearInterval(interval));
  }, [time]);

  const renderTime = () => {
    const { remaining, details } = time;

    return (
      <Fragment>
        {remaining}

        {details && (
          <div className="details">
            {details}
          </div>
        )}
      </Fragment>
    );
  };

  return (
    <div className="aggTimer" {...rest} >
      {time ? renderTime() : setTime(aggTime(props))}
    </div>
  );
};

export default AggTimer;