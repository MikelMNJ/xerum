import React, { createRef, useEffect, useCallback, useRef } from 'react';
import { StyledNotifications } from './styles';
import { Message } from './Message';

const Notifications = props => {
  const {
    theme,
    selectedTheme,
    noIcons,
    noTime,
    time,
    notifications,
    removeNotification,
    textColor,
    borderColor,
    bgColor,
    top,
    right,
    bottom,
    left,
  } = props;
  const targets = useRef([]);

  const removeMessage = useCallback(i => {
    if (removeNotification) removeNotification(i);
  }, [ removeNotification ]);

  useEffect(() => {
    if (!noTime && notifications?.length >= 1) {
      const timer = setTimeout(() => {
        removeMessage(0);
        clearTimeout(timer);
      }, time || 5000);

      return () => clearTimeout(timer);
    }
  }, [ notifications, removeMessage, time, noTime ]);

  const buildNotifications = () => {
    const refs = notifications?.map?.((msg, i) => (
      targets.current[i] ?? createRef()
    ));

    targets.current = [ ...refs || [] ];

    return notifications?.map?.((msg, i) => {
      return (
        <Message
          key={i}
          ref={targets.current[i]}
          theme={theme}
          selectedTheme={selectedTheme}
          message={msg}
          noIcons={noIcons}
          onClose={() => removeMessage(i)}
          textColor={textColor}
          borderColor={borderColor}
          bgColor={bgColor}
        />
      );
    });
  };

  return (
    <StyledNotifications $top={top} $right={right} $bottom={bottom} $left={left}>
      {buildNotifications()}
    </StyledNotifications>
  );
};

export { Notifications };