import React, { Fragment, useState, useEffect } from 'react';
import { iconValid } from '../../helpers';
import { Flatline } from './styles';

const Heartbeat = props => {
  const { time, icon, text, disabled, children, endpoint, ...rest } = props;
  const [ offline, setOffline ] = useState(false);

  useEffect(() => {
    const heartbeat = setInterval(async () => {
      if (!disabled) {
        try {
          const res = await fetch(endpoint || 'https://icanhazip.com');
          const data = await res.data;

          if (offline) setOffline(false);
          return data;
        } catch (e) {
          if (!offline) setOffline(true);
        }
      }
    }, time || 60000);

    return () => clearInterval(heartbeat);
  }, [ offline, disabled, time ]);

  const offlineContent = () => {
    return (
      <Flatline {...rest}>
        <i className={iconValid(icon) || 'fa-solid fa-ethernet'} />
        <p>{text || 'No connection detected.'}</p>
      </Flatline>
    );
  };

  return (
    <Fragment>
      {offline ? offlineContent() : children}
    </Fragment>
  );
};

export { Heartbeat };