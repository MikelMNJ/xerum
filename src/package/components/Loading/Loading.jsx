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
    noFailIcon,
    children,
    text,
    failText,
    noText,
    onFail,
    renderOnFail,
    height,
  } = props;

  const buildContent = () => {
    if (isLoading) {
      return (
        <Text $theme={theme} $selectedTheme={selectedTheme} $column={column} $textColor={textColor} $height={height}>
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
          <Text $theme={theme} $selectedTheme={selectedTheme} $column={column} $textColor={textColor} $height={height}>
            {!noFailIcon && (
              <Fragment>
                {iconValid(failIcon)
                  ? <Icon
                      $theme={theme}
                      $selectedTheme={selectedTheme}
                      className={iconValid(failIcon) || 'fa-solid fa-exclamation-circle'}
                      $iconSize={iconSize}
                      $iconColor={iconColor}
                    />
                  : failIcon || <Icon
                      $theme={theme}
                      $selectedTheme={selectedTheme}
                      className='fa-solid fa-exclamation-circle'
                      $iconSize={iconSize}
                      $iconColor={iconColor}
                    />
                }
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