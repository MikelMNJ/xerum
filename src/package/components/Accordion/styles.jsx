import { getColor, hexValid } from '../../helpers';
import { theme } from '../../theme';
import styled, { css } from 'styled-components';
import _ from 'lodash';

const colors = theme.colors;

export const StyledAccordion = styled('div')`
  width: 100%;
`;

export const Section = styled('div')`
  height: 100%;
`;

export const Title = styled('div')`
  display: inline-flex;
  align-items: center;
  min-height: 3rem;
  width: 100%;
  margin: 0 auto;
  padding: 0 1rem;
  cursor: pointer;
  user-select: none;
  border-bottom: 0.0625rem solid ${props => {
    const lightTheme = props.$selectedTheme === 'light';
    const color = getColor(props, lightTheme ? 'lightGrey' : 'darkGrey', colors.neutral.lightGrey);
    return hexValid(props.$borderColor) || color;
  }};

  @media (hover: hover) {
    &:hover {
      color: ${props => hexValid(props.$hoverTextColor) || getColor(props, 'onPrimary', colors.shades.black)};
      background-color: ${props => {
        const lightTheme = props.$selectedTheme === 'light';
        const color = getColor(props, lightTheme ? 'lightGrey' : 'darkGrey', colors.neutral.lightGrey);

        if (hexValid(props.$hoverColor)) return props.$hoverColor;
        if (_.isEmpty(props.$theme)) return color + 50;
        return lightTheme ? color + 35 : color;
      }};
    }
  }

  ${props => props.$active && css`
    color: ${props => hexValid(props.$activeTextColor) || getColor(props, 'onAccent', colors.shades.white)};
    background-color: ${props => hexValid(props.$activeBGColor) || getColor(props, 'accent', colors.shades.black)};
    border: none;

    @media (hover: hover) {
      &:hover {
        color: ${props => hexValid(props.$activeHoverTextColor) || getColor(props, 'primary', colors.shades.white)};
        background-color: ${props => {
          if (hexValid(props.$activeHoverBGColor)) return props.$activeHoverBGColor;
          return getColor(props, 'accentHover', colors.neutral.davysGrey);
        }};
      }
    }
  `}

  i {
    font-size: ${props => props.$iconSize || 0.75}rem;
  }
`;

export const Content = styled('div')`
  display: ${props => props.$active ? 'flex' : 'none'};
  padding: 1rem 2rem;
`;