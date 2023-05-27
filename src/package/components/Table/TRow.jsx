import React from 'react';
import { LI } from './styles';

const TRow = props => {
  const {
    theme,
    selectedTheme,
    headerTextColor,
    headerBGColor,
    hasLabel,
    labelBGColor,
    evenTextColor,
    evenBGColor,
    evenHoverTextColor,
    evenHoverBGColor,
    oddTextColor,
    oddBGColor,
    oddHoverTextColor,
    oddHoverBGColor,
    header,
    children,
    callback,
    provided,
    draggable,
    columnLayout,
    headers,
  } = props;

  return (
    <LI
      ref={provided?.innerRef}
      $theme={theme}
      $selectedTheme={selectedTheme}
      $headerTextColor={headerTextColor}
      $headerBGColor={headerBGColor}
      $header={header}
      $headers={headers}
      $hasLabel={hasLabel}
      $labelBGColor={labelBGColor}
      $evenTextColor={evenTextColor}
      $evenBGColor={evenBGColor}
      $evenHoverTextColor={evenHoverTextColor}
      $evenHoverBGColor={evenHoverBGColor}
      $oddTextColor={oddTextColor}
      $oddBGColor={oddBGColor}
      $oddHoverTextColor={oddHoverTextColor}
      $oddHoverBGColor={oddHoverBGColor}
      $callback={callback}
      $columnLayout={columnLayout}
      draggable={draggable}
      onClick={() => callback?.()}
      {...provided?.draggableProps}
      {...provided?.dragHandleProps}
    >
      {children}
    </LI>
  );
};

export { TRow };