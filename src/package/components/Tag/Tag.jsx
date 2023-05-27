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
    verticalPadding,
    horizontalPadding,
    bgColor,
    borderSize,
    borderColor,
    borderRadius,
    removable,
    iconLeft,
    closeIcon,
    closeSize,
    closeColor,
    callback,
    pill,
    round,
    allClick,
    children,
  } = props;

  return (
    <StyledTag
      $theme={theme}
      $selectedTheme={selectedTheme}
      $textColor={textColor}
      $bgColor={bgColor}
      $pill={pill}
      $round={round}
      $verticalPadding={verticalPadding}
      $horizontalPadding={horizontalPadding}
      $removable={removable}
      $textSize={textSize}
      $borderSize={borderSize}
      $borderColor={borderColor}
      $borderRadius={borderRadius}
      $iconLeft={iconLeft}
      $allClick={allClick}
      onClick={() => allClick && callback?.()}
    >
      {removable && iconLeft && (
        <Close
          $theme={theme}
          $selectedTheme={selectedTheme}
          $closeSize={closeSize}
          $closeColor={closeColor}
          onClick={() => !allClick && callback?.()}
        >
          {!iconLeft && <Spacer size={horizontalPadding || 1} across={true} />}

          {iconValid(closeIcon)
            ? <i className={`${iconValid(closeIcon)}`} />
            : closeIcon || <i className='fa-solid fa-circle-xmark' />
          }

          {iconLeft && <Spacer size={horizontalPadding || 1} across={true} />}
        </Close>
      )}

      <ChildWrapper>
        {text || children}
      </ChildWrapper>

      {removable && !iconLeft && (
        <Close
          $theme={theme}
          $selectedTheme={selectedTheme}
          $closeSize={closeSize}
          $closeColor={closeColor}
          onClick={() => !allClick && callback?.()}
        >
          {!iconLeft && <Spacer size={horizontalPadding || 1} across={true} />}

          {iconValid(closeIcon)
            ? <i className={`${iconValid(closeIcon)}`} />
            : closeIcon || <i className='fa-solid fa-circle-xmark' />
          }

          {iconLeft && <Spacer size={horizontalPadding || 1} across={true} />}
        </Close>
      )}
    </StyledTag>
  );
};

export { Tag };