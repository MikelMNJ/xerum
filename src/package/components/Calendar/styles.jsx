import { getColor, hexValid } from '../../helpers';
import { appConstants, theme } from '../../theme';
import styled, { css } from 'styled-components';

const { themes } = appConstants;
const { colors } = theme;
const { light } = themes;
const squareSize = 2.5;

export const StyledCalendar = styled('div')`
  display: flex;
  flex-direction: column;
  padding: 0.5rem;
  ${props => props.$fontFamily && css`font-family: ${props.$fontFamily};`}
`;

export const MonthNav = styled('div')`
  display: inline-flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 3rem;
  ${props => props.$headerFontFamily && css`font-family: ${props.$headerFontFamily};`}
`;

export const DayHeaders = styled('div')`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  width: 100%;
  color: ${props => {
    const color = hexValid(props.$headerColor) || getColor(props, 'onPrimary', colors.shades.black);
    return color;
  }}
`;

export const HeaderItem = styled('div')`
  display: flex;
  align-items: center;
  justify-content: center;
  height: ${squareSize}rem;
  width: 100%;
  ${props => props.$headerFontFamily && css`font-family: ${props.$headerFontFamily};`}
`;

export const Days = styled('div')`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  grid-template-rows: repeat(6, 1fr);
  width: 100%;
`;

export const Day = styled('div')`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: ${squareSize}rem;
  width: 100%;
  border-radius: 0.125rem;
  cursor: ${props => props.$disabled ? 'not-allowed' : 'pointer'};

  background-color: ${props => {
    const activeColor = hexValid(props.$activeBGColor) || getColor(props, 'accent', colors.accent.brightNavyBlue);
    return props.$active ? activeColor : 'transparent';
  }};

  color: ${props => {
    const lightTheme = props.$selectedTheme === light;
    const isActive = props.$active;

    if (props.$disabled || (!props.$disablePastDates && !props.$inThisMonth && !isActive)) {
      const color = hexValid(props.$disabledTextColor) ||
        lightTheme
          ? getColor(props, 'grey', colors.neutral.greyWeb) + 90
          : getColor(props, 'grey', colors.neutral.greyWeb);

      return color;
    }

    if (isActive) {
      const color = hexValid(props.$activeTextColor) || getColor(props, 'white', colors.shades.white);
      return color;
    }

    return hexValid(props.$textColor) || getColor(props, 'onPrimary', colors.shades.black);
  }};

  &:hover {
    background-color: ${props => {
      const lightTheme = props.$selectedTheme === light;
      const hoverColor = hexValid(props.$bgHoverColor)
        || getColor(props, lightTheme ? 'lightGrey' : 'grey', colors.neutral.lightGrey);

      if (props.$disabled) {
        const color = hexValid(props.$disabledBGHoverColor) || getColor(props, 'grey', colors.neutral.lightGrey) + 50;
        return color;
      }

      if (props.$active) {
        const color = hexValid(props.$activeBGHoverColor) || getColor(props, 'accentHover', colors.accent.carolinaBlue);
        return color;
      }

      return hoverColor;
    }};

    color: ${props => {
      const color = hexValid(props.$textHoverColor)
        || getColor(props, 'onPrimary', colors.shades.black);

      if (props.$disabled) {
        const color = hexValid(props.$disabledTextHoverColor) || getColor(props, 'grey', colors.neutral.greyWeb);
        return color;
      }

      if (props.$active) {
        const color = hexValid(props.$activeTextHoverColor) || getColor(props, 'white', colors.shades.white);
        return color;
      }

      return color;
    }};
  }
`;

export const NavIcon = styled('div')`
  display: flex;
  align-items: center;
  justify-content: center;
  height: ${squareSize}rem;
  width: ${squareSize}rem;
  border-radius: 0.125rem;
  cursor: pointer;
  background-color: ${props => {
    const color = hexValid(props.$iconBGColor) || getColor(props, 'accent', colors.accent.brightNavyBlue);
    return color;
  }};

  i {
    font-size: ${props => props.$iconSize || 1}rem;
    color: ${props => hexValid(props.$iconColor) || getColor(props, 'white', colors.shades.white)};
  }

  &:hover {
    background-color: ${props => {
      const color = hexValid(props.$iconBGHoverColor) || getColor(props, 'accentHover', colors.accent.carolinaBlue);
      return color;
    }};
  }
`;