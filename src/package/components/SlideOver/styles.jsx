import { getColor, hexValid } from '../../helpers';
import { theme } from '../../theme';
import styled, { css } from 'styled-components';

const colors = theme.colors;
const restPosition = 0;
const fontSize = 1;
const minWidth = 23;

export const StyledSlideOver = styled('div')`
  position: fixed;
  top: 0;
  right: ${restPosition};
  z-index: ${props => props.$zIndex ?? 2};
  height: ${props => props.$height ? `${props.$height}rem` : '100dvh'};
  width: ${props => props.$width ? `${props.$width}rem` : '23rem'};
  min-width: ${minWidth}rem;
  max-width: ${props => props.$width > minWidth ? props.$width : minWidth}rem;
  padding: 1rem 2rem 2rem;
  background-color: ${props => hexValid(props.$bgColor) || getColor(props, 'primary', colors.shades.white)};
  box-shadow: 0 0.25rem 0.25rem ${props => getColor(props, 'black', colors.shades.black) + 80};
  ${props => props.$boxShadow && css`box-shadow: ${props.$boxShadow};`} // Box shadow override
  border-left: 0.0625rem solid ${props => getColor(props, 'lightGrey', colors.neutral.lightGrey) + 80};
  border-radius: ${props => props.$borderRadius || 0}rem;
  color: ${props => getColor(props, 'onPrimary', colors.shades.black)};
  overflow-y: auto;

  ${props => props.$topOffset && css`
    margin-top: ${props.$topOffset}rem;
    height: calc(100dvh - ${props.$topOffset}rem);
  `}

  ${props => props.$bottomOffset && css`
    margin-bottom: ${props.$bottomOffset}rem;
    height: calc(100dvh - ${props.$bottomOffset}rem);
  `}

  ${props => props.$topOffset && props.$bottomOffset && css`
    margin-top: ${props.$topOffset}rem;
    margin-bottom: ${props.$bottomOffset}rem;
    height: calc(100dvh - ${props.$topOffset + props.$bottomOffset}rem);
  `}

  ${props => props.$rightOffset && css`
    margin-right: ${props.$rightOffset}rem;
    width: calc(100% - ${props.$rightOffset}rem);
  `}

  ${props => props.$leftOffset && css`
    margin-left: ${props.$leftOffset}rem;
    width: calc(100% - ${props.$leftOffset}rem);
  `}

  ${props => props.$leftOffset && props.$rightOffset && css`
    margin-left: ${props.$leftOffset}rem;
    margin-right: ${props.$rightOffset}rem;
    width: calc(100% - ${props.$leftOffset + props.$rightOffset}rem);
  `}

  ${props => props.$mobileMode && css`
    max-width: unset;
    min-width: unset;
    border-left: none;
    border-radius: 1rem 1rem 0 0;
    width: 100%;
    height: calc(100dvh - 2rem);
    top: 2rem;
    padding: 0.5rem 1rem 1rem;
  `}
`;

export const Header = styled('div')`
  position: relative;
  display: inline-flex;
  gap: 1rem;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

export const H3 = styled('h3')`
  margin: 0;
  color: ${props => hexValid(props.$titleColor) || getColor(props, 'onPrimary', colors.shades.black)};
  font-weight: bold;
  user-select: none;

  @media only screen and (max-width: 414px) {
    font-size: 1rem;
  }
`;

export const CloseIcon = styled('div')`
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${props => props.$width || 3}rem;
  height: ${props => props.$height || 3}rem;
  cursor: pointer;
  margin-right: -1rem;
  color: ${props => {
    const color = hexValid(props.$closeColor) || getColor(props, 'onPrimary', colors.shades.black);

    if (props.disabled) return getColor(props, 'lightGrey', colors.neutral.lightGrey);
    return color;
  }};

  &:hover {
    color: ${props => hexValid(props.$closeHoverColor) || getColor(props, 'accent', colors.neutral.greyWeb)};
  }

  i {
    font-size: ${props => props.$closeIconSize || fontSize}rem;
  }
`;