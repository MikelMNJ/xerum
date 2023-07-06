import { getColor, hexValid } from '../../helpers';
import { theme } from '../../theme';
import styled, { css } from 'styled-components';

const colors = theme.colors;

export const StyledTable = styled('ul')`
  display: flex;
  flex-direction: column;
  width: 100%;
  outline-offset: 0rem;
  border-radius: 0.35rem;
  margin: 0;
  padding: 0;
  list-style: none;
`;

export const TDContainer = styled('div')`
  display: flex;
  position: relative;
  align-items: center;
`;

export const TD = styled('div')`
  margin: 0.5rem 0;
  width: 100%;
  text-align: left;
`;

export const LI = styled('li')`
  display: grid;
  grid-template-columns: ${props => props.$columnLayout || `repeat(${props.$headers?.length || 1}, 1fr)`};
  gap: 0 1rem;
  align-items: center;
  padding: 0.5rem 1rem;
  min-height: 4rem;
  font-size: 0.875rem;
  cursor: ${props => props.$callback ? 'pointer' : 'default'};
  color: ${props => hexValid(props.$headerTextColor) || getColor(props, 'white', colors.shades.white)};
  background-color: ${props => {
    const lightTheme = props.$selectedTheme === 'light';
    const fallback = colors.neutral.davysGrey;
    return hexValid(props.$headerBGColor) || getColor(props, lightTheme ? 'darkGrey' : 'black', fallback);
  }};

  ${props => props.$hasLabel && css`
    border-left: 1.5rem solid ${hexValid(props.$labelBGColor) || getColor(props, 'black', colors.shades.black)};
  `}

  ${props => props.$header && css`
    user-select: none;
    -webkit-touch-callout: none;
  `}

  &:first-child {
    border-radius: 0.25rem 0.25rem 0 0;
  }

  &:last-child {
    border-radius: 0 0 0.25rem 0.25rem;
  }

  ${props => !props.$header && css`
    &:nth-child(even) {
      color: ${props => hexValid(props.$evenTextColor) || getColor(props, 'onPrimary', colors.shades.black)};
      background-color: ${props => {
        const fallback = getColor(props, 'primary', colors.shades.white) + 50;
        return hexValid(props.$evenBGColor) || fallback;
      }};

      @media (hover: hover) {
        &:hover {
          color: ${props => hexValid(props.$evenHoverTextColor) || getColor(props, 'onPrimary', colors.shades.black)};
          background-color: ${props => {
            const lightTheme = props.$selectedTheme === 'light';
            return hexValid(props.$evenHoverBGColor)
              || getColor(props, 'black', colors.shades.black) + (lightTheme ? 20 : 75);
          }};
      }}
    }
  `}

  ${props => !props.$header && css`
    &:nth-child(odd) {
      color: ${props => hexValid(props.$oddTextColor) || getColor(props, 'onPrimary', colors.shades.black)};
      background-color: ${props => {
        const lightTheme = props.$selectedTheme === 'light';
        const color = lightTheme ? 'lightGrey' : 'darkGrey';
        const opacityVal = lightTheme ? 50 : 99;
        const fallback = '#e1e1e1';

        return hexValid(props.$oddBGColor) || getColor(props, color, fallback) + opacityVal;
      }};
    }

    @media (hover: hover) {
      &:hover {
        color: ${props => hexValid(props.$oddHoverTextColor) || getColor(props, 'onPrimary', colors.shades.black)};
        background-color: ${props => {
          const lightTheme = props.$selectedTheme === 'light';
          return hexValid(props.$oddHoverBGColor)
            || getColor(props, 'black', colors.neutral.greyWeb) + (lightTheme ? 20 : 75);
        }};
      }
    }
  `}

  ${props => props.isDragging && css`
    box-shadow: 0 0.1rem 0.2rem ${getColor(props, 'black', colors.shades.black)};
    backdrop-filter: blur(0.25rem);
  `}

  @media screen and (max-width: ${props => props.$mobileSize || 40}rem) {
    grid-template-columns: 1fr;
    ${props => props.$header && css`display: none;`}

    &:nth-child(2) {
      border-radius: 0.35rem 0.35rem 0 0;
    }
  }
`;

export const Label = styled('div')`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  bottom: 0;
  left: -1.75rem;
  width: 0;
  font-size: 0.8rem;
  color: ${props => hexValid(props.$labelTextColor) || getColor(props, 'white', colors.shades.white)};
  background-color: ${props => hexValid(props.$labelBGColor) || getColor(props, 'black', colors.shades.black)};
  padding: 0;
  transform: rotate(-90deg);
`;

export const Grip = styled('div')`
  display: flex;
  align-items: center;
  margin-left: 0.75rem;
  opacity: 0.75;
  text-align: right;
  width: fit-content;
  height: 100%;
  cursor: pointer;
`;

export const HeaderItem = styled('div')`
  cursor: ${props => props.$sortable ? 'pointer' : 'default'};
`;

export const ResponsiveHeader = styled('p')`
  display: none;
  margin: 0;
  width: fit-content;

  @media screen and (max-width: ${props => props.$mobileSize || 40}rem) {
    display: block;
  }
`;