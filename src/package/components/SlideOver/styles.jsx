import { getColor, hexValid } from '../../helpers';
import { theme } from '../../theme';
import { Button } from '../Button/Button';
import styled from 'styled-components';

const colors = theme.colors;
const restPosition = 0;

export const StyledSlideOver = styled('div')`
  position: fixed;
  top: 0;
  right: ${restPosition};
  z-index: 100;
  height: 100%;
  min-width: 23rem;
  max-width: 23rem;
  padding: 1rem 2rem;
  background-color: ${props => hexValid(props.bgColor) || getColor(props, 'primary', colors.shades.white)};
  box-shadow: 0 0.25rem 0.25rem ${props => getColor(props, 'black', colors.shades.black) + 80};
  border-left: 0.0625rem solid ${props => getColor(props, 'lightGrey', colors.neutral.lightGrey) + 80};
  color: ${props => getColor(props, 'onPrimary', colors.shades.black)};
  overflow-y: auto;

  &.slideIn {
    animation: slideOverIn ease 0.35s;
  }

  &.slideOut {
    animation: slideOverOut ease 0.35s;
  }

  @keyframes slideOverIn {
    0% { right: -25rem; }
    100% { right: ${restPosition}; }
  }

  @keyframes slideOverOut {
    0% { right: ${restPosition}; }
    100% { right: -25rem; }
  }

  @media only screen and (max-width: 414px) {
    min-width: 21rem;
    max-width: 21rem;
  }

  @media only screen and (max-width: 360px) {
    min-width: 20rem;
    max-width: 20rem;
  }
`;

export const Header = styled('div')`
  display: inline-flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;

`;

export const H3 = styled('h3')`
  margin: 0;
  color: ${props => hexValid(props.titleColor) || getColor(props, 'onPrimary', colors.shades.black)};
  font-weight: bold;
  user-select: none;

  @media only screen and (max-width: 414px) {
    font-size: 1rem;
  }
`;

export const CloseButton = styled(Button)`
  display: flex;
  align-items: center;
  height: auto;
  width: fit-content;
  border: inherit;
  color: ${props => hexValid(props.closeColor) || getColor(props, 'onPrimary', colors.shades.black)};
  font-size: 1.5rem;
  background-color: inherit;
  margin: 0;
  padding: 0;
  margin-right: -1rem;

  @media (hover: hover) {
    &:hover {
      color: ${props => hexValid(props.closeHoverColor) || getColor(props, 'accent', colors.neutral.greyWeb)};
    }
  }
`;