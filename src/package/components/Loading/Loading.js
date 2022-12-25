import React, { Fragment } from 'react';
import { iconValid } from '../../helpers';
import { Spacer } from '../Spacer/Spacer';
import { StyledLoading, Icon } from './styles';

const Loading = props => {
  const {
    theme,
    selectedTheme,
    textColor,
    iconColor,
    column,
    isLoading,
    hasData,
    icon,
    iconSize,
    failIcon,
    noIcon,
    children,
    className,
    text,
    failText,
    noText,
    onFail,
    renderOnFail,
    ...rest
  } = props;

  const buildContent = () => {
    if (isLoading) {
      return (
        <Fragment>
          {!noIcon && (
            <Fragment>
              <Icon
                theme={theme}
                selectedTheme={selectedTheme}
                className={`${iconValid(icon) || 'fa-solid fa-spinner'} fa-spin`}
                iconSize={iconSize}
                iconColor={iconColor}
              />
              <Spacer across={true} />
            </Fragment>
          )}

          {!noText && (text || 'Loading...')}
        </Fragment>
      );
    }

    if (!isLoading && !hasData) {
      onFail?.();

      if (!renderOnFail) {
        return (
          <Fragment>
            {!noIcon && (
              <Fragment>
                <Icon
                  theme={theme}
                  selectedTheme={selectedTheme}
                  className={iconValid(failIcon) || 'fa-solid fa-exclamation-circle'}
                  iconSize={iconSize}
                  iconColor={iconColor}
                />
                <Spacer across={true} />
              </Fragment>
            )}

            {!noText && (failText || 'Load failed.')}
          </Fragment>
        );
      }
    }

    return children;
  };

  return (
    <StyledLoading
      theme={theme}
      selectedTheme={selectedTheme}
      textColor={textColor}
      column={column}
      {...rest}
    >
      {buildContent()}
    </StyledLoading>
  );
};

export { Loading };