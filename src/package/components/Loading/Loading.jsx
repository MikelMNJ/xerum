import React, { Fragment } from 'react';
import { iconValid } from '../../helpers';
import { Spacer } from '../Spacer/Spacer';
import { Icon, Text } from './styles';

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
        <Text $theme={theme} $selectedTheme={selectedTheme} $column={column} $textColor={textColor} {...rest}>
          {!noIcon && (
            <Fragment>
              <Icon
                $theme={theme}
                $selectedTheme={selectedTheme}
                className={`${iconValid(icon) || 'fa-solid fa-spinner'} fa-spin`}
                $iconSize={iconSize}
                $iconColor={iconColor}
              />
              <Spacer across={true} />
            </Fragment>
          )}

          {!noText && (text || 'Loading...')}
        </Text>
      );
    }

    if (!isLoading && !hasData) {
      onFail?.();

      if (!renderOnFail) {
        return (
          <Text $theme={theme} $selectedTheme={selectedTheme} $textColor={textColor}>
            {!noIcon && (
              <Fragment>
                <Icon
                  $theme={theme}
                  $selectedTheme={selectedTheme}
                  className={iconValid(failIcon) || 'fa-solid fa-exclamation-circle'}
                  $iconSize={iconSize}
                  $iconColor={iconColor}
                />
                <Spacer across={true} />
              </Fragment>
            )}

            {!noText && (failText || 'Load failed.')}
          </Text>
        );
      }
    }

    return children;
  };

  return (
    <Fragment>
      {buildContent()}
    </Fragment>
  );
};

export { Loading };