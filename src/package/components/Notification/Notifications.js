import React, { createRef, useEffect, useRef } from 'react';
import { StyledNotifications } from './styles';
import { Message } from './Message';

const Notifications = props => {
  const { noIcons, noTime, time, notifications, removeNotification, ...rest } = props;
  const targets = useRef([]);

  useEffect(() => {
    if (!noTime && notifications?.length >= 1) {
      const timer = setTimeout(() => {
        removeMessage(0);
        clearTimeout(timer);
      }, time || 4000);

      return () => clearTimeout(timer);
    }
  }, [ notifications, removeMessage, time, noTime ]);

  function removeMessage(i) {
    if (removeNotification) removeNotification(i);
  };

  const buildNotifications = () => {
    const refs = notifications?.map((msg, i) => (
      targets.current[i] ?? createRef()
    ));

    targets.current = [ ...refs ];

    return notifications?.map((msg, i) => {
      return (
        <Message
          key={i}
          ref={targets.current[i]}
          message={msg}
          noIcons={noIcons}
          onClose={() => removeMessage(i)}
          {...rest}
        />
      );
    });
  };

  return (
    <StyledNotifications>
      {buildNotifications()}
    </StyledNotifications>
  );
};

export { Notifications };