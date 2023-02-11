import React from 'react';
import { iconValid } from '../../helpers';
import { Spacer } from '../Spacer/Spacer';
import { StyledTag, Close, ChildWrapper } from './styles';

const Tag = props => {
  const {
    theme,
    selectedTheme,
    text,
    textSize,
    textColor,
    bgColor,
    removable,
    closeIcon,
    closeSize,
    closeColor,
    callback,
    pill,
    round,
    children,
    ...rest
  } = props;

  return (
    <StyledTag
      theme={theme}
      selectedTheme={selectedTheme}
      textColor={textColor}
      bgColor={bgColor}
      pill={pill}
      round={round}
      removable={removable}
      textSize={textSize}
      {...rest}
    >
      <ChildWrapper>
        {text || children}
      </ChildWrapper>

      {removable && (
        <Close
          theme={theme}
          selectedTheme={selectedTheme}
          closeSize={closeSize}
          closeColor={closeColor}
        >
          <Spacer size={1.0625} across={true} />

          <i
            className={`${iconValid(closeIcon) || 'fa-solid fa-circle-xmark'}`}
            onClick={() => callback?.()}
          />

          <Spacer size={0.8125} across={true} />
        </Close>
      )}
    </StyledTag>
  );
};

export { Tag };