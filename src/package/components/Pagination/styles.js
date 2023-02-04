import { getColor, hexValid } from '../../helpers';
import { theme } from '../../theme';
import styled, { css } from 'styled-components';

const colors = theme.colors;

const stateColor = (props, themeActive, themeInactive, themeActiveFallback, themeInactiveFallback) => {
  if (props.active) {
    return hexValid(props.activeColor) || getColor(props, themeActive, themeActiveFallback || colors.black);
  }

  return hexValid(props.inactiveColor) || getColor(props, themeInactive, themeInactiveFallback || colors.darkGrey);
};

export const StyledPagination = styled('div')`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: fit-content;
  margin: 0 auto;
  cursor: pointer;
  color: ${props => hexValid(props.inactiveColor) || getColor(props, 'onPrimary', colors.darkGrey)};
  user-select: none;
`;

export const EndButton = styled('div')`
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${props => hexValid(props.inactiveColor) || getColor(props, 'onPrimary', colors.darkGrey)};

  &:hover {
    color: ${props => hexValid(props.inactiveColor) || getColor(props, 'accent', colors.grey)};
  }
`;

export const Marker = styled('div')`
  position: absolute;
  bottom: ${props => props.markerSpacing > 0 ? props.markerSpacing * -1 : 0}rem;
  left: 0;
  right: -0.0625rem;
  margin: 0 auto;
  width: ${props => props.markerWidth ?? 1.0625}rem;
  height: ${props =>  props.markerHeight ?? 0.25}rem;
  border-radius: 0.5rem;
  user-select: none;

  ${props => props.active && css`
    background-color: ${stateColor(props, 'accent', 'onPrimary', colors.black, colors.darkGrey)};
  `}
`;

export const PageNum = styled('div')`
  display: flex;
  align-items: center;
  position: relative;
  justify-content: center;
  padding: 0.5rem;
  color: ${props => stateColor(props, 'accent', 'onPrimary', colors.black, colors.darkGrey)};
  user-select: none;
  font-weight: ${props => props.active && props.boldActive ? '600' : 'normal'};
  font-size: ${props => props.numberSize || 1}rem;

  &:first-of-type {
    margin-left: 0.5rem;
  }

  &:last-of-type {
    margin-right: 0.5rem;
  }

  @media (hover: hover) {
    &:hover {
      color: ${props => stateColor(props, 'accentHover', 'accent', colors.grey, colors.grey)};
    }

    &:hover ${Marker} {
      background-color: ${props => stateColor(props, 'accentHover', 'accent', colors.grey, colors.grey)};
    }
  };
`;